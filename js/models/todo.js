Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  dueDate: DS.attr()
});

Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true,
   dueDate: '12-May-2015'
 },
 {
   id: 2,
   title: '...',
   isCompleted: false,
   dueDate: '12-May-2015'
 },
 {
   id: 3,
   title: 'Profit!',
   isCompleted: false,
   dueDate: '12-May-2015'
 }
];