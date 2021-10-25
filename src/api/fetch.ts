import storage from '@/utils/storage';
import { TodoItem } from './types';

// temp function) id가 클수록 최근에 작성한 할 일이기 때문에 최신순으로 정렬하는 임시 함수 구성
const recentlySortFunction = (a: TodoItem, b: TodoItem) => b.id - a.id;

const fetch = {
  fetchTodoList(filterOption = 'all') {
    const todos = storage.getItem('wally-todos');
    if (!todos) {
      // 이 페이지를 최초로 여는 경우 빈 배열로 세팅
      storage.setItem('wally-todos', JSON.stringify([]));
    }
    
    const parsedTodos: TodoItem[] = JSON.parse(todos || '[]').sort(recentlySortFunction);

    if (filterOption === 'completed') {
      const filteredTodos = parsedTodos.filter((todo) => todo.isCompleted);

      return {
        data: filteredTodos,
        isError: false,
      }
    }

    if (filterOption === 'inCompleted') {
      const filteredTodos = parsedTodos.filter((todo) => !todo.isCompleted);

      return {
        data: filteredTodos,
        isError: false,
      }
    }

    return {
      data: parsedTodos,
      isError: false,
    }
  },
  
  fetchTodoItem(id: number) {
    if (!id) {
      return {
        data: {},
        message: 'id 값을 함께 요청해주세요.',
        isError: true,
      }
    }

    const todos = this.fetchTodoList()?.data;
    if (!todos) {
      return {
        data: {},
        message: '할 일 목록이 존재하지 않습니다.',
        isError: true,
      }
    }

    const matcedTodoItem = todos.find((todo) => todo.id === +id);
    if (!matcedTodoItem) {
      return {
        data: {},
        message: 'id 값과 일치하는 할 일 항목이 존재하지 않습니다.',
        isError: true,
      }
    }
    
    return {
      data: matcedTodoItem,
      isError: false,
    }
  },
}

export default fetch;