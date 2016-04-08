function Page() {
    "use strict";

    var $container, container;

    // shortcuts to react objects
    var React = module.React;
    var ReactDOM = module.ReactDOM;

    var model = new Model();

    function render() {

        $container = $('<div/>')
            .attr('id', "react-hello-container");

        $('body').append($container);
        container = $('body').find('#react-hello-container').get(0);

        var HelloReactComponent = react.hello;
        ReactDOM.render(
            React.createElement(HelloReactComponent, model),
            container);

        if (done) done();

    }

    this.show = function (state, done) {

        if (!$container) render();
        $container.show();

        if (done) done();

    }

}
