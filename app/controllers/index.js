Alloy.Collections.todo.fetch();
var openItems = [], completedItems = [], savedItems;
Alloy.Collections.todo.each(function(item) {
    openItems.push({
        desc : {
            text : item.get('desc')
        },
        priority : {
            text : item.get('priority')
        }
    });
});

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
    newTodo = Alloy.createModel('todo', {
        'desc' : desc,
        'priority' : 'high'
    });
    newTodo.save();
    Alloy.Collections.todo.add(newTodo);
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
