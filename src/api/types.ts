export interface TodoItem {
  id: number;
  title: string;
  contents: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateTodoForm = Pick<TodoItem, 'title' | 'contents'>;

export type UpdateTodoForm = Pick<TodoItem, 'id' | 'title' | 'contents'>;