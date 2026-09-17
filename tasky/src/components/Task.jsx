const Task = (props) => {
    

  const getPriorityColor = (priority) => {
    switch(priority) {
      case "Low":
        return "green";
      case "Medium":
        return "orange";
      case "High":
        return "red";
      default:
        return "black";
    }
  }

    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            <p className="description">{props.description}</p>
            <p className="priority" style={{ color: getPriorityColor(props.priority)}}>{props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button onClick={props.deleteTask} className='deleteButton'>Delete</button>
        </div>
    )

}

export default Task;
