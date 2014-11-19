( function() {
        Alloy.Globals.Helpers = {};
        Alloy.Globals.Helpers.deviceHeight = Ti.Platform.displayCaps.platformHeight;
        Alloy.Globals.Helpers.deviceWidth = Ti.Platform.displayCaps.platformWidth;
        Alloy.Globals.Helpers.mainWindow = {
            height : (Alloy.Globals.Helpers.deviceHeight - 50),
            width : (Math.ceil(Alloy.Globals.Helpers.deviceWidth * 0.95)),
            qtrWidth : (Math.ceil(Alloy.Globals.Helpers.deviceWidth * 0.25)),
            fourth : (Math.ceil((Alloy.Globals.Helpers.deviceWidth * 4)/10)),
        };
        Alloy.Globals.Helpers.listViewHeight = (Alloy.Globals.Helpers.deviceHeight - 100);
        Alloy.Globals.Helpers.popOver = {
            top : (Alloy.Globals.Helpers.deviceHeight + 1)
        };
        Alloy.Globals.Helpers.slideIn = {
            left : (Math.ceil(Alloy.Globals.Helpers.deviceWidth * -1)) - 1
        };
    }());