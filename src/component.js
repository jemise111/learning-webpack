var React = require('react');
var Button;

module.exports = React.createClass({

	getInitialState: function() {
		return {
			buttonLoaded: false,
			showButton: false
		};
	},

	toggle: function() {
		this.setState({
			showButton: !this.state.showButton
		});
	},

	getComponent: function() {
		if (this.state.showButton) {
			if (this.state.buttonLoaded) {
				return <Button />;
			} else {
				require.ensure([], function() {
					Button = require('./button');
					this.setState({buttonLoaded: true});
				}.bind(this));
			}
		} else {
			return <h2>Hello My React World</h2>;
		}
	},

	render: function() {
		return (
			<div>
				{this.getComponent()}
				<a className='toggle' onClick={this.toggle}>Toggle</a>
			</div>
		);
	}
});