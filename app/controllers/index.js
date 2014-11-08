var openItems = [{
    desc : {
        text : 'put the rubbish out'
    },
    priority : {
        text : 'high'
    }
}];
var completedItems = [{
    desc : {
        text : 'put the cat out'
    },
    priority : {
        text : 'high'
    }
}, {
    desc : {
        text : 'water the flowers'
    },
    priority : {
        text : 'high'
    }
}, {
    desc : {
        text : 'This is a very, very long description that will overrun the text field.  I wonder how it will look.'
    },
    priority : {
        text : 'medium'
    }
}];
$.openSection.setItems(openItems);
$.completedSection.setItems(completedItems);
var items = $.completedSection.getItems();
var count = 0;
_.each(items, function(item) {
    item.template = 'closedTemplate';
    $.completedSection.updateItemAt(count, item);
    count++;
});
$.newentry.addEventListener('return', function(e) {
    var desc = e.value, newTodo;
    Alloy.Collections.todo.add({
        'desc' : desc,
        'priority' : 'high'
    });
    $.newentry.value = '';
});
Alloy.Collections.todo.on("add", function(item) {
    var desc, priority, newItem;
    desc = item.get('desc');
    priority = item.get('priority');
    newItem = {
        'desc' : {
            text : desc
        },
        'priority' : {
            'text' : priority
        }
    };
    $.openSection.appendItems([newItem]);
});
$.index.open();