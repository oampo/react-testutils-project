var React = require('react/addons');
require("react-tap-event-plugin")();

var App = require('./components/app');
var Order = require('./components/order');

var mui = require('material-ui');
var RadioButton = mui.RadioButton;
var Checkbox = mui.Checkbox;


document.addEventListener('DOMContentLoaded', function() {
    var TestUtils = React.addons.TestUtils;
    var component = React.render(<App><Order /></App>, document.body);
});

