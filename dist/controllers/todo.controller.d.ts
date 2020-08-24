import { Filter } from '@loopback/repository';
import { Todo } from '../models';
import { TodoRepository } from '../repositories';
export declare class TodoController {
    protected todoRepository: TodoRepository;
    constructor(todoRepository: TodoRepository);
    createTodo(todo: Omit<Todo, 'id'>): Promise<Todo>;
    findTodoById(id: number, items?: boolean): Promise<Todo>;
    findTodos(filter?: Filter<Todo>): Promise<Todo[]>;
    replaceTodo(id: number, todo: Todo): Promise<void>;
    updateTodo(id: number, todo: Partial<Todo>): Promise<void>;
    deleteTodo(id: number): Promise<void>;
}
