function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "templates/spacer";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId27 = [];
    var __alloyId29 = {
        type: "Ti.UI.View",
        properties: {
            height: "5"
        }
    };
    __alloyId27.push(__alloyId29);
    $.__views.spacer = {
        properties: {
            name: "spacerTemplate",
            backgroundColor: "black",
            selectedBackgroundColor: "transparent",
            height: Ti.UI.SIZE,
            id: "spacer"
        },
        childTemplates: __alloyId27
    };
    __itemTemplate["spacerTemplate"] = $.__views.spacer;
    $.__views.spacer && $.addTopLevelView($.__views.spacer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;