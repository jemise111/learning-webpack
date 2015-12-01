require('./button.scss');
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<a className='my-button'>
				Click Me
			</a>
		);
	}
});