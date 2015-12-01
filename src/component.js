require('./button.scss');
var React = require('react');

module.exports = React.createClass({

	getInitialState: function() {
		return {
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
			var Button = require('./button');
			return <Button />;	
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