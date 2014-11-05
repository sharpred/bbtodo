module.exports = {
    //create our backbone collections here
    create: function() {
        if (!Alloy.Collections.todo) {
            console.log('creating todo collection');
            Alloy.Collections.todo = Alloy.createCollection('todo');
        } else {
            console.log('todo collection already exists');
        }
    }
};
