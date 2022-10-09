import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCircleCheck,
  faPen,
  faTrashCan,
 } from '@fortawesome/free-solid-svg-icons'

const ToDo = (props) => {
  const {
    task,
    index,
    markDone,
    setUpdateTaskData,
    deleteTask
  } = props;

  return (
    <Fragment key={task.id}>
      <div className='col task-bg'>
        <div className={task.status ? 'done' : ''}>
          <span className='task-number'>{index+1}</span>
          <span className='task-text'>{task.title}</span>
        </div>

        <div className='icons-wrap'>
          <span
            title='Done / Not Done'
            onClick={(e) => markDone(task.id)}
          >
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>

          {task.status ? null : (
            <span
              title='Edit'
              onClick={ () => setUpdateTaskData(task)}
            >
              <FontAwesomeIcon icon={faPen} />
            </span>
          )}
          
          <span
            title='Delete'
            onClick={() => deleteTask(task.id)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default ToDo;
