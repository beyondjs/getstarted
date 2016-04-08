function Model() {
    "use strict";

    var events = new Events({'bind': this});

    var time;
    this.getState = function () {

        return {'time': time};

    };

    setInterval(function () {

        var date = new Date();
        time = "Actual time: " + date.getDay() + "/" + date.getMonth()
            + "/" + date.getFullYear() + " @ "
            + date.getHours() + ":"
            + date.getMinutes() + ":" + date.getSeconds();

        events.trigger('change');

    }, 1000);

}
