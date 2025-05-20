function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <span className="task-title">{task.title}</span>
      <div className="task-actions">
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;
