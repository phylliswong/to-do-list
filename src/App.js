import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import AddTaskForm from './components/add-task-form/add-task-form.component';
import UpdateForm from './components/update-form/update-form.component';
import ToDo from './components/to-do/to-do.component';

import './App.css';

function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [updateTaskData, setUpdateTaskData] = useState('');

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = {
        id: num,
        title: newTask,
        status: false
      }
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  }

  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id);
    setToDo(newTasks);
  }

  const markDone = (id) => {
    let doneTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status });
      }
      return task;
    });
    setToDo(doneTask);
  }

  const cancelUpdate = () => {
    setUpdateTaskData('');
  }

  const changeTask = (e) => {
    let newEntry = {
      id: updateTaskData.id,
      title: e.target.value,
      status: updateTaskData.status ? true : false,
    }
    setUpdateTaskData(newEntry);
  }

  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateTaskData.id);
    let upDatedObject = [...filterRecords, updateTaskData];
    setToDo(upDatedObject);
    setUpdateTaskData('');
  }

  return (
    <div className='container App'>
      <h2 className='app-title'>To Do List App</h2>
      {updateTaskData && updateTaskData ? (
        <UpdateForm 
          changeTask={changeTask}
          updateTask={updateTask}
          updateTaskData={updateTaskData}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          addTask={addTask}
          setNewTask={setNewTask}
        />
      )}

      {toDo && toDo.length ? '' : 'Add Some Tasks...'}
      {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, index) => {
          return(
            <ToDo 
              task={task}
              index={index}
              markDone={markDone}
              setUpdateTaskData={setUpdateTaskData}
              deleteTask={deleteTask}
            />
          )
        })
      }
    </div>
  );
}

export default App;
