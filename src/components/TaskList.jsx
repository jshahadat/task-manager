import TaskItem from "./taskItem";

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks found. Add a new task!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))
      )}
    </ul>
  );
}

export default TaskList;
