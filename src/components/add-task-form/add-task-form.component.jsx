import 'bootstrap/dist/css/bootstrap.css';
import './add-task-form.style.css';

const AddTaskForm = (props) => {
  const { addTask, newTask, setNewTask, handleKeypress } = props;
  return (
    <div className='row'>
      <div className='col'>
        <input
          value={newTask}
          onChange={ (e) => setNewTask(e.target.value)}
          className='form-control form-control-lg shadow-none'
          onKeyPress={handleKeypress}
        />
      </div>
      <div className='col-auto'>
        <button
          onClick={addTask}
          className='btn btn-lg btn-success'
        >Add Task</button>
      </div>
    </div>
  )
};

export default AddTaskForm;
