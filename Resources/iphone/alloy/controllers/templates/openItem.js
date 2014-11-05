function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "templates/openItem";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId22 = [];
    var __alloyId24 = {
        type: "Ti.UI.Label",
        bindId: "desc",
        properties: {
            color: "black",
            bindId: "desc",
            left: "10",
            width: "200"
        }
    };
    __alloyId22.push(__alloyId24);
    var __alloyId26 = {
        type: "Ti.UI.Label",
        bindId: "priority",
        properties: {
            color: "black",
            bindId: "priority",
            right: "10",
            width: "40"
        }
    };
    __alloyId22.push(__alloyId26);
    $.__views.openItem = {
        properties: {
            height: Ti.UI.SIZE,
            name: "openTemplate",
            backgroundColor: "transparent",
            selectedBackgroundColor: "transparent",
            id: "openItem"
        },
        childTemplates: __alloyId22
    };
    __itemTemplate["openTemplate"] = $.__views.openItem;
    $.__views.openItem && $.addTopLevelView($.__views.openItem);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;