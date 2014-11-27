//create our backbone collections here
//require('collections');
//helper functions for useful repeatable tasks under Alloy.Globals.Helpers
require('helpers');
if (!_) {
    _ = require('alloy/underscore');
}
var str = require('underscore.strings');
// Mix in non-conflicting functions to Underscore namespace
_.mixin(str.exports());