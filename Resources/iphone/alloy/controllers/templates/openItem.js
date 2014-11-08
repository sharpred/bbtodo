function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "templates/openItem";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId23 = [];
    var __alloyId25 = {
        type: "Ti.UI.Label",
        bindId: "desc",
        properties: {
            height: "50",
            color: "black",
            bindId: "desc",
            left: "10",
            width: "200"
        }
    };
    __alloyId23.push(__alloyId25);
    var __alloyId27 = {
        type: "Ti.UI.Label",
        bindId: "priority",
        properties: {
            height: "50",
            color: "black",
            bindId: "priority",
            right: "10",
            width: "75"
        }
    };
    __alloyId23.push(__alloyId27);
    var __alloyId28 = {
        type: "Ti.UI.Label",
        properties: {
            height: "0",
            width: "0"
        }
    };
    __alloyId23.push(__alloyId28);
    $.__views.openItem = {
        properties: {
            height: Ti.UI.SIZE,
            name: "openTemplate",
            backgroundColor: "transparent",
            selectedBackgroundColor: "transparent",
            id: "openItem"
        },
        childTemplates: __alloyId23
    };
    __itemTemplate["openTemplate"] = $.__views.openItem;
    $.__views.openItem && $.addTopLevelView($.__views.openItem);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;