var async = require('async');

module.exports = function () {
    "use strict";

    this.getTimeStamp = async(function *(resolve, reject) {

        setTimeout(function () {
            resolve(Date.now());
        }, 1000);

    });

};
