module.exports = {
    create: function() {
        if (Alloy.Collections.todo) console.log("todo collection already exists"); else {
            console.log("creating todo collection");
            Alloy.Collections.todo = Alloy.createCollection("todo");
        }
    }
};