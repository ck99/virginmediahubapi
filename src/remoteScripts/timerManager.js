window.setInterval = ((window, setInterval) => {
    if (!window.timers) {
        window.timers = {};
    }
    if (!window.timers.intervals) {
        window.timers.intervals = {};
    }
    if (!window.timers.intervals.active) {
        window.timers.intervals.active = {};
    }
    return function (func, interval) {
        let id = setInterval(func, interval);
        console.log("setInterval call intercepted and hooked")
        window.timers.intervals.active[id] = func;
        return id;
    }
})(window, window.setInterval);

window.clearInterval = ((window, clearInterval) => {
    if (!window.timers) {
        window.timers = {};
    }
    if (!window.timers.intervals) {
        window.timers.intervals = {};
    }
    if (!window.timers.intervals.inactive) {
        window.timers.intervals.inactive = {};
    }
    return function (id) {
        console.log("clearInterval call intercepted and hooked")
        if (window.timers.intervals.active && window.timers.intervals.active[id]) {
            window.timers.intervals.inactive[id] = window.timers.intervals.active[id];
            clearInterval(id);
            delete window.timers.intervals.active[id];
        }
    }
})(window, window.clearInterval);

window.clearAllIntervals = () => {
    if (!window.timers) {
        window.timers = {};
    }
    if (!window.timers.intervals) {
        window.timers.intervals = {};
    }
    if (!window.timers.intervals.active) {
        window.timers.intervals.active = {};
    }
    Object.getOwnPropertyNames(window.timers.intervals.active).forEach(timerId => {
        clearInterval(parseInt(timerId));
    })
}