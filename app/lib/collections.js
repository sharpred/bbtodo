( function() {
        if (!Alloy.Collections.todo) {
            console.log('creating todo collection');
            Alloy.Collections.todo = Alloy.Collections.instance('todo');
        } else {
            console.log('todo collection already exists');
        }
    }());