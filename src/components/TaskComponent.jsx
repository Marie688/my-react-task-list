function TaskComponent (props){
 const {task}= props;   
return(

<h2> {task} <input type="checkbox" ></input> </h2>
);
}
export default TaskComponent