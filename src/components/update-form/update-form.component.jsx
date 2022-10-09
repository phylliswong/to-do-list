import 'bootstrap/dist/css/bootstrap.css';

const UpdateForm = (props) => {
  const { changeHolder, updateTask, updateTaskData, cancelUpdate } = props;
  return (
    <div className='row add-task-row'>
      <div className='col'>
        <input
          value={ updateTaskData && updateTaskData.title }
          onChange={ (e) => changeHolder(e) }
          className='form-control form-control-lg shadow-none'
        />
      </div>
      <div className='col-auto'>
        <button
          onClick={updateTask}
          className='btn btn-lg btn-success mr-20'
        >Update</button>
        <button
          onClick={cancelUpdate}
          className='btn btn-lg btn-warning'
        >Cancel</button>
      </div>
    </div>
  );
};

export default UpdateForm;
