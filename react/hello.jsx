exports = React.createClass({
    'getInitialState': function () {
        return this.props.getState();
    },
    'componentDidMount': function () {
        this._onChange = Delegate(this, function () {
            this.setState(this.props.getState());
        });

        this.props.bind('change', this._onChange);
    },
    'componentWillUnmount': function () {
        this.props.unbind('change', this._onChange);
    },
    'render': function () {
        return (
            <div className="react-hello">{this.state.time}</div>
        );
    }
});
