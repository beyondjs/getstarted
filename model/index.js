function Model() {
    "use strict";

    this.getTimeStamp = function (callback) {

        module.execute('getTimeStamp', function (response, error) {

            if (error) {
                callback();
                return;
            }

            callback(response);

        });

    };

}

define(function () {
    "use strict";

    return Model;

});
