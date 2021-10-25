import api from '.';
import form from '@/utils/form';
import storage from '@/utils/storage';
import { UpdateTodoForm } from './types';

const update = {
  updateTodoItem(todoForm: UpdateTodoForm) {
    const { id, title, contents } = todoForm;

    const { message, isError } = form.prechecker(title, contents);

    if (isError) {
      return {
        message,
        isError,
      }
    }

    const todos = api.fetchTodoList().data;

    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, title: title, contents: contents, updatedAt: new Date(), } : todo;
    });

    storage.setItem('wally-todos', JSON.stringify(updatedTodos));

    return {
      message: '할 일이 수정되었습니다.',
      isError: false,
    }
  },

  toggleTodoItem(id: number) {
    const todos = api.fetchTodoList().data;

    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
    });
    
    storage.setItem('wally-todos', JSON.stringify(updatedTodos));
  }
}

export default update;