function Page() {
    "use strict";

    var $container;

    this.show = function (state, done) {

        if (!$container) {
            $container = $('<div />').html('hello world!');
            $('body').html($container);
        }

        if (done) done();

    };

    this.hide = function () {
        $container.hide();
    };

}
