import api from '.';
import storage from '@/utils/storage';

const remove = {
  removeTodoItem(id: number) {
    if (!id) {
      return {
        message: 'id 값을 함께 요청해주세요.',
        isError: true,
      }
    }

    const todos = api.fetchTodoList().data;

    const filteredTodos = todos.filter((todo) => todo.id !== id);

    storage.setItem('wally-todos', JSON.stringify(filteredTodos));

    return {
      message: '할 일이 삭제되었습니다.',
      isError: false,
    }
  },
}

export default remove;