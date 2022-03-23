import './App.css'
import { useState } from "react";

function App() {

    const [list, setList] = useState([])

    const saveTask = (task) => {
        setList((prevValue) => [...prevValue, task]);

    }

    const checkPriority = (priority, list) => {
        return list.filter(task => task.priority === priority)
    }


    const saveDeleteTask = (id) => {
        const _list = list.filter((item) => item.id !== id);
        setList(_list)
        console.log(_list)
    }

    const changeStatusTask = (id, isChecked) =>{
        let task = list.find((item) => item.id === id);
        if(isChecked){
            task.status = 'Done';
        }
        else{
            task.status = 'To Do';
        }
    }

    console.log(list)
    return (
        <div className="App">
            <Header />
            <TaskAdd priority={'high'} saveTaskState={saveTask} list={list} saveDeleteTask={saveDeleteTask} checkPriority={checkPriority} changeStatusTask={changeStatusTask}/>

            <TaskAdd priority={'middle'} saveTaskState={saveTask} list={list} saveDeleteTask={saveDeleteTask} checkPriority={checkPriority} changeStatusTask={changeStatusTask}/>
            <TaskAdd priority={'low'} saveTaskState={saveTask} list={list} saveDeleteTask={saveDeleteTask} checkPriority={checkPriority} changeStatusTask={changeStatusTask}/>
        </div>
    );
}

function Header() {
    return <h1 className="header">To-Do List & Tasks</h1>;
}

function TaskAdd({ priority, saveTaskState, list, saveDeleteTask, checkPriority, changeStatusTask }) {

    const _list = checkPriority(priority, list)

    return (
        <div className="container">
            <PriorityTaskLabel priority={priority} />
            <FormTask priority={priority} saveTask={saveTaskState} />
            <TasksList list={_list} saveDeleteTask={saveDeleteTask} changeStatusTask={changeStatusTask}/>
        </div>
    );
}

function PriorityTaskLabel({ priority }) {
    return <div className="task_label">{priority}</div>;
}

function FormTask({ saveTask, priority }) {
    const [taskName, setTaskName] = useState("");


    function addTask(taskName, status = "To Do", priority = "low") {
        return {
            id: Math.random(),
            name: taskName,
            status: status,
            priority: priority,
        };
    }
    const handleChange = (task) => {
        setTaskName(task)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (taskName) {
            const status = 'To Do'
            const task = addTask(taskName, status, priority)
            console.log(task)
            saveTask(task)
            setTaskName('')
        }

    }
    return (
        <form className="form_task" onSubmit={handleSubmit}>
            <Input onChangeValue={handleChange} value={taskName} />
            <Button value="+" />
        </form>
    );
}

function Input({ onChangeValue, value }) {
    function handleChange(e) {
        onChangeValue(e.target.value)
    }

    return (
        <input
            className="input_task"
            type="text"
            value={value}
            onChange={handleChange}
        />
    );
}

function Button({ value }) {

    return (
        <button className="button" type="submit">
            {value}
        </button>
    );
}

function Task({ value, saveDeleteTask, id, changeStatusTask }) {

    const [color, setColor] = useState('input_task')

    function deleteTask() {
        saveDeleteTask(id)
    }

    function colorTask(e){
        if (e.target.checked) {
            setColor('input_task done')
            return true
        }
        else {
            setColor('input_task')
            return false
        }
    }

    const changeChecked = (e) => {
        const isChecked =  colorTask(e)
        changeStatusTask(id, isChecked)

    }

    return (
        <div className='form_task'>
            <input className={color} readOnly='readonly' value={value} />
            <button className='button' value="-" onClick={deleteTask} />
            <input className='checkbox' type='checkbox' onChange={changeChecked} />
        </div>
    );
}

function TasksList({ list = [], saveDeleteTask,changeStatusTask }) {
    return list.map((task) => <Task saveDeleteTask={saveDeleteTask} key={task.id} id={task.id} value={task.name} changeStatusTask={changeStatusTask} />);
}
export default App;
