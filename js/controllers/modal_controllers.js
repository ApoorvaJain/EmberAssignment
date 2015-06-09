Todos.AddNewModalController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
      	id: 5,
        title: title,
        isCompleted: false,
        dueDate: '12-May-2015'
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    }
  }
});

Todos.EditModalController = Ember.ObjectController.extend({
	actions: {
		save: function(){
			var newTitle = this.get('model.title');
			this.get('model').save();
		}
	} 
});

Todos.DeleteModalController = Ember.ObjectController.extend({
	actions: {
		deleteItem: function(){
			this.get('model').deleteRecord();
			this.get('model').save();
		}
	}
});