var update = function() {
    var openItems = [],
        completedItems = [],
        savedItems,
        totalOpen,
        totalClosed;
    Alloy.Collections.todo.each(function(item) {
        var completed = item.get('completed');
        if (!completed) {
            openItems.push({
                desc : {
                    text : item.get('desc')
                },
                priority : {
                    text : item.get('priority')
                },
                alloy_id : {
                    text : item.get('alloy_id')
                }
            });
        } else {
            completedItems.push({
                desc : {
                    text : item.get('desc')
                },
                priority : {
                    text : item.get('priority')
                },
                alloy_id : {
                    text : item.get('alloy_id')
                }
            });
        }
    });
    $.openSection.setItems(openItems);
    $.completedSection.setItems(completedItems);
    $.openSection.headerTitle = Alloy.Collections.todo.open().length + ' open items';
    $.completedSection.headerTitle = Alloy.Collections.todo.completed().length + ' completed items';
    /**
     * change the completed item template
     */
    var items = $.completedSection.getItems();
    var count = 0;
    _.each(items, function(item) {
        item.template = 'closedTemplate';
        $.completedSection.updateItemAt(count, item);
        count++;
    });
};
/**
 * listeners
 */
$.newentry.addEventListener('return', function(e) {
    var desc = e.value,
        newTodo;
    newTodo = Alloy.createModel('todo', {
        'desc' : desc,
        'priority' : 'high'
    });
    newTodo.save();
    Alloy.Collections.todo.add(newTodo);
    $.newentry.value = '';
});
Alloy.Collections.todo.on("add", function(item) {
    var desc,
        priority,
        newItem;
    desc = item.get('desc');
    priority = item.get('priority');
    alloy_id = item.get('alloy_id');
    newItem = {
        'desc' : {
            text : desc
        },
        'priority' : {
            'text' : priority
        },
        alloy_id : {
            text : alloy_id
        }
    };
    $.openSection.appendItems([newItem]);
});
Alloy.Collections.todo.on('change', update);
/**
 * itemclick listener
 */
$.todolist.addEventListener('itemclick', function(e) {
    /**
     * completed defaults to false, onclick it toggles and view is updated
     */
    var item,
        model;
    //get the item from the relevant section
    item = $[e.section.id].getItemAt(e.itemIndex);
    //update the model and persist the update
    model = Alloy.Collections.todo.get(item.alloy_id.text);
    model.toggle();
});
var show = true;
var showForm = function() {
    var top;
    if (show) {
        top = 50;
    } else {
        top = Alloy.Globals.Helpers.popOver.top;
    }
    show = !show;
    var animation = Titanium.UI.createAnimation();
    animation.top = top;
    animation.duration = 1000;
    animation.curve = Titanium.UI.ANIMATION_EASE_IN;
    $.popOver.animate(animation);
};
var slide = function() {
    var left;
    if (show) {
        left = 0;
    } else {
        left = Alloy.Globals.Helpers.slideIn.left;
    }
    show = !show;
    var animation = Titanium.UI.createAnimation();
    animation.left = left;
    animation.duration = 1000;
    animation.curve = Titanium.UI.ANIMATION_EASE_IN;
    $.slide.animate(animation);
};

$.config.addEventListener('click', slide);

//finally load the page
update();
$.index.open();