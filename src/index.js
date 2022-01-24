import { Todo, TodoList } from "./classes";
import "./css/componentes.css";
import { crearTodoHtml } from "./js/crearTodoHtml";

export const todoList = new TodoList();
const tarea = new Todo("Aprender JavaScript");
const tarea2 = new Todo("Aprender python");
todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);
console.log(todoList);

crearTodoHtml(tarea);
