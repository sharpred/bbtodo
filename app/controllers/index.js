

function filterOpen(collection) {
    return collection.getOpenItems();
};

function filterCompleted(collection) {
    return collection.getCompletedItems();
};


$.index.open();
//fetch the up to date data
Alloy.Collections.todo.fetch();
