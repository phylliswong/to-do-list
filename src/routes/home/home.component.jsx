import { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';

import AddTaskForm from '../../components/add-task-form/add-task-form.component';
import UpdateForm from '../../components/update-form/update-form.component';
import ToDo from '../../components/to-do/to-do.component';

import './home.styles.scss';

const Home = () => {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [updateTaskData, setUpdateTaskData] = useState('');

  const addTask = () => {
    if (newTask) {
      const num = toDo.length + 1;
      setToDo([
        ...toDo,
        { id: num, title: newTask, status: false }
      ]);
      setNewTask('');
    }
  }

  const deleteTask = (id) => {
    setToDo( toDo.filter(task => task.id !== id) );
  }

  const markDone = (id) => {
    setToDo(toDo.map(
      task => task.id === id
      ? ({ ...task, status: !task.status })
      : task
    ));
  }

  const cancelUpdate = () => {
    setUpdateTaskData('');
  }

  const changeHolder = (e) => {
    setUpdateTaskData({
      ...updateTaskData,
      title: e.target.value
    });
  }

  const updateTask = () => {
    const removeOldRecord = [...toDo].filter(task => task.id !== updateTaskData.id);
    setToDo([
      ...removeOldRecord,
      updateTaskData
    ]);
    setUpdateTaskData('');
  }

  const handleKeypress = (e) => {
    if (e.key === 'Enter' || e.key === 'Return') {
      e.preventDefault();
      addTask();
    }
  };
  return (
    <Fragment>
      <div className='home-container'>
      <Outlet />
      {updateTaskData && updateTaskData ? (
        <UpdateForm 
          changeHolder={changeHolder}
          updateTask={updateTask}
          updateTaskData={updateTaskData}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          addTask={addTask}
          setNewTask={setNewTask}
          handleKeypress={handleKeypress}
        />
      )}

      {toDo && toDo.length ? '' : 'Add Some Tasks...'}
      {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, index) => {
          return(
            <ToDo
              key={task.id}
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
    </Fragment>
  )
}

export default Home;