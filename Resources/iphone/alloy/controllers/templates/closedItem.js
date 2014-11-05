function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "templates/closedItem";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId17 = [];
    var __alloyId19 = {
        type: "Ti.UI.ImageView",
        properties: {
            left: "10",
            width: "40"
        }
    };
    __alloyId17.push(__alloyId19);
    var __alloyId21 = {
        type: "Ti.UI.Label",
        bindId: "desc",
        properties: {
            color: "blue",
            bindId: "desc",
            left: "50",
            width: "200"
        }
    };
    __alloyId17.push(__alloyId21);
    var __alloyId23 = {
        type: "Ti.UI.Label",
        bindId: "priority",
        properties: {
            color: "blue",
            bindId: "priority",
            left: "260",
            width: "40"
        }
    };
    __alloyId17.push(__alloyId23);
    $.__views.closedItem = {
        properties: {
            height: Ti.UI.SIZE,
            name: "closedTemplate",
            backgroundColor: "transparent",
            selectedBackgroundColor: "transparent",
            id: "closedItem"
        },
        childTemplates: __alloyId17
    };
    __itemTemplate["closedTemplate"] = $.__views.closedItem;
    $.__views.closedItem && $.addTopLevelView($.__views.closedItem);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;