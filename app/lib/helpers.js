( function() {
        Alloy.Globals.Helpers = {};
        Alloy.Globals.Helpers.deviceHeight = Ti.Platform.displayCaps.platformHeight;
        Alloy.Globals.Helpers.deviceWidth = Ti.Platform.displayCaps.platformWidth;
        Alloy.Globals.Helpers.mainWindow = {
            height : (Alloy.Globals.Helpers.deviceHeight - 50),
            width : (Math.ceil(Alloy.Globals.Helpers.deviceWidth * 0.95))
        };
        Alloy.Globals.Helpers.popOver = {
            top : (Alloy.Globals.Helpers.deviceHeight + 50)
        };
    }());
