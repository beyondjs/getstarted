function Page() {
    "use strict";

    var $container;

    // shortcuts to react objects
    var React = module.React;
    var ReactDOM = module.ReactDOM;

    function render() {


    }

    this.show = function (state, done) {

        if (!$container) render();
        $container.show();

        if (done) done();

    }

}