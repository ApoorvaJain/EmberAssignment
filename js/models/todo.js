Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  dueDate: DS.attr('string')
});

// Todos.Todo.FIXTURES = [
//  {
//    id: 1,
//    title: 'Learn Ember.js',
//    isCompleted: true,
//    dueDate: '12-May-2015'
//  },
//  {
//    id: 2,
//    title: '...',
//    isCompleted: false,
//    dueDate: '12-May-2015'
//  },
//  {
//    id: 3,
//    title: 'Profit!',
//    isCompleted: false,
//    dueDate: '12-May-2015'
//  }
// ];

Todos.TodoSerializer = DS.RESTSerializer.extend({
  extractArray : function(store,primaryType,payload){
    payload = {todos: payload};
    return this._super(store,primaryType,payload);
  },
  extractSingle : function(store,primaryType,payload,recordId){
    payload = {todo: payload};
    this._super(store,primaryType,payload,recordId);
  },
  serializeIntoHash: function(hash,type,snapshot,options){
    var json = this.serialize(snapshot,{includeId : true});
    Object.keys(json).forEach(function(key){
      hash[key] = json[key]
    });
  }
});