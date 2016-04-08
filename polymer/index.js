function Page() {
    "use strict";

    var $container;

    function render() {

        $container = $('<div id="hello-page" />');
        $container.html(module.render('index'));

        $('body').append($container);

    }

    this.show = function (state, done) {

        if (!$container) render();
        $container.show();

        if (done) done();
    };

    this.hide = function () {
        $container.hide();
    };

}