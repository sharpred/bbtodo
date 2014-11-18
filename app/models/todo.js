exports.definition = {
    config : {
        columns : {
            "desc" : "TEXT",
            "reminder" : "INTEGER",
            "priority" : "INTEGER",
            "type" : "TEXT",
            "completed" : "INTEGER"
        },
        adapter : {
            type : "sql",
            collection_name : "todo"
        }
    },
    extendModel : function(Model) {
        _.extend(Model.prototype, {
            // extended functions and properties go here
            toggle : function() {
                this.save({
                    completed : !this.get('completed')
                });
            }
        });

        return Model;
    },
    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {
            // extended functions and properties go here
            completed : function() {
                return this.filter(function(todo) {
                    return todo.get('completed');
                });
            },
            getCompleted : function() {
                completedItems = [];
                _.each(this.completed(), function(item) {
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
                });
                return completedItems;
            },
            open : function() {
                return this.without.apply(this, this.completed());
            },
            getOpen : function() {
                openItems = [];
                _.each(this.open(), function(item) {
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
                });
                return openItems;
            }
        });

        return Collection;
    }
};
