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
$.index.open();
