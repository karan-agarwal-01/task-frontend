import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaPencilAlt, FaPlus, FaSave, FaTrash } from "react-icons/fa";

const BASE_URL = "https://task-backend-eight-delta.vercel.app/api/todos";
// const BASE_URL = "http://localhost:3000/api/todos";

const TodoList = ()  => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    
    const fetchTodos = async () => {
        const res = await axios.get(`${BASE_URL}/get-list`);
        setTodos(res.data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const createTodo = async () => {
        if (!newTodo.trim()) return;
        await axios.post(`${BASE_URL}/create-todo`, { title: newTodo });
        setNewTodo("");
        fetchTodos();
    };

    const updateTodo = async () => {
        await axios.put(`${BASE_URL}/update-todo/${editId}`, { title: editText });
        setEditId(null);
        setEditText("");
        fetchTodos();
    };

    const deleteTodo = async (id) => {
        await axios.delete(`${BASE_URL}/delete-todo/${id}`);
        fetchTodos();
    };

    const toggleComplete = async (todo) => {
        await axios.put(`${BASE_URL}/update-todo/${todo._id}`, {
            completed: !todo.completed
        });
        fetchTodos();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-400 lg:p-6 md:p-4 p-2">
            <div className="w-full max-w-2xl bg-white backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8">
                <h1 className="text-indigo-600 text-3xl font-bold text-center mb-6 drop-shadow">Todo List</h1>
                <div className="flex gap-3 mb-6">
                    <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add new task" className="flex-1 px-4 py-3 rounded-xl bg-white border-gray-300  border outline-none focus:ring-2 focus:ring-indigo-600" />
                    <button onClick={createTodo} className="flex gap-2 items-center cursor-pointer px-4 py-3 text-white rounded-xl bg-indigo-700 font-semibold hover:bg-indigo-800 transition shadow-lg">
                        <p>Add</p>
                        <FaPlus size={'.9rem'} />
                    </button>
                </div>
                <div className="space-y-4">
                    {todos.map((todo) => (
                        <div key={todo._id} className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center lg:gap-0 md:gap-0 gap-2 justify-between bg-white/30 border border-white/40 backdrop-blur-lg rounded-xl lg:p-4 md:p-4 p-2">
                            <div className="flex items-center gap-3 lg:mb-0 md:mb-0 mb-4">
                                <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo)} className="w-5 h-5 cursor-pointer" />
                                {editId === todo._id ? (
                                    <input value={editText} onChange={(e) => setEditText(e.target.value)} className={`px-3 py-2 rounded-lg bg-white/40 text-gray-900 focus:ring-2 ${isEdit ? "outline-1" : "outline-none"}`}/>
                                ) : (
                                    <span className={`text-lg flex-1 min-w-0 whitespace-normal ${todo.completed ? "line-through opacity-70" : ""}`}>{todo.title}</span>
                                )}
                            </div>
                            {
                                todo.completed ? (
                                    <span className="text-xl text-green-700">Todo Completed!</span>
                                ) : (
                                <div className="flex gap-3">
                                    {editId === todo._id ? (
                                        <button onClick={updateTodo} className="px-3 py-1 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition cursor-pointer flex gap-2 items-center">
                                            <p>Save</p>
                                            <FaSave size={'0.8rem'}  />
                                        </button>
                                    ) : (
                                        <button onClick={() => {setEditId(todo._id); setEditText(todo.title); setIsEdit(true)}} className="px-3 py-1 bg-indigo-700  text-white rounded-lg hover:bg-indigo-800 transition cursor-pointer flex items-center gap-2">
                                            <p>Edit</p>
                                            <FaPencilAlt size={'.8rem'} />
                                        </button>
                                    )}
                                    <button onClick={() => deleteTodo(todo._id)} className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer flex gap-2 items-center">
                                        <p>Delete</p>
                                        <FaTrash size={'0.8rem'} />
                                    </button>
                                </div>
                                )
                            }             
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TodoList;