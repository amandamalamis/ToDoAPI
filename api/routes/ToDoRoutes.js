'use strict';
module.exports = function(app) {
  var toDoList = require('../controllers/ToDoController');

  // todoList Routes
  app.route('/items')
    .get(toDoList.list_all_items)
    .post(toDoList.create_an_item);


  app.route('/items/:itemId')
    .get(toDoList.read_an_item)
    .put(toDoList.update_an_item)
    .delete(toDoList.delete_an_item);
};
