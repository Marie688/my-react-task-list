import TaskComponent from "./TaskComponent";

function TaskListComponent (props){
    
    return (
      <div>
        <ul>
          <li>
            <TaskComponent task="repasar todo" />
          </li>
          <li>
            <TaskComponent task="repasar todo" />
          </li>
          <li>
            <TaskComponent task="repasar todo" />
          </li>
        </ul>
      </div>
    );
}
export default TaskListComponent;