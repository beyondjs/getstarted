function Page() {
    "use strict";

    var Model = module.dependencies.model;
    var model = new Model();

    var $container;

    var render = function (done) {

        var html = module.render('index');

        $container = $('<div />')
            .attr('id', 'timestamp-page')
            .html(html);

        $('body').append($container);

        model.getTimeStamp(function (timestamp) {

            $container.find('.timestamp .value').html(timestamp);
            done();

        });

    };


    this.show = function (state, done) {

        if (!$container) render(done);
        $container.show();

    };

    this.hide = function () {
        $container.hide();
    };

}