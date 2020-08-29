window.hubclient = (() => {
    console.log("initialising hubclient");
    let loggedIn = false;
    let hubUser = "";
    let hubPassword = "";

    const doLogin = async () => {

        return new Promise((resolve, reject) => {
            console.log("Attempting login");
            let data = {
                'fun':15,
                'Username':hubUser,
                'Password': hubPassword
            };
            cbnAjax({
                url: "../xml/setter.xml", type: 'POST', async: false, dataType:"text", data: data,
                success: function(response){
                    updateSID(response);
                    let patt = new RegExp("successful");
                    if((patt.test(response)) !== true)
                    {
                        if(response.match("cbnBlockContent")) {
                            loggedIn = false;
                            console.log("Login failed: BlockedContent");
                            reject("BlockedContent");
                        }
                        else if(response === "lockedout" || response.match("cbnAccessDenied")) {
                            loggedIn = false;
                            console.log("Login failed: AccessDenied");
                            reject("AccessDenied")
                        }
                        else {
                            loggedIn = false;
                            console.log("Login failed: InvalidPassword");
                            reject("InvalidPassword");
                        }
                    }
                    else{
                        loggedIn = true;
                        console.log("Login Success");
                        resolve();
                    }
                },
                error: function(response){
                    reject(response);
                }
            });
        })
    };

    const getFunctionResult = async (functionNumber, functionRule) => {
        let execute = () => {
            return new Promise((resolve, reject) => {
                console.log("sending hubclient.get {func:" + functionNumber + "}");
                cbnAjax({
                    url: "../xml/getter.xml",
                    type: "POST",
                    data: {
                        fun: functionNumber,
                        rule: functionRule
                    },
                    dataType: "xml",
                    success: function (xmlResponse) {
                        console.log("received hubclient.get {func:" + functionNumber + "}");
                        if (xmlResponse && xmlResponse.documentElement) {
                            resolve(xmlResponse.documentElement.outerHTML)
                        } else {
                            resolve("");
                        }
                    },
                    error: function (xmlResponse) {
                        console.error("error hubclient.get {func:" + functionNumber + "}");
                        reject("LoginError")
                    },
                    timeout: 30 * 1000
                });
            })
        }

        return execute().catch(err => {
            if(err === "LoginError") {
                return doLogin().then(execute);
            }
        })
    }

    return {
        init: (user, password) => {
            hubUser = user;
            hubPassword = password;
            clearAllIntervals();
        },
        get: getFunctionResult,
        state: () => {
            return loggedIn  ? "LoggedIn" : "NotLoggedIn";
        },
        login: () => {
            return doLogin();
        }
    }
})();