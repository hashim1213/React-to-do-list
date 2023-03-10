import React, { useState, useEffect } from 'react';
import Task from './Task';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [garden, setGarden] = useState([]);
  const [listName, setListName] = useState('');
  const [userName, setUserName] = useState('');
  

  useEffect(() => {
    const timer = setInterval(() => {
      const today = new Date();
      const tomorrow = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1
      );
      const timeToGrow = tomorrow - today;
      setTimeout(() => {
        setFlowers([
          ...flowers,
          {
            size: 1,
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
              Math.random() * 255
            })`,
          },
        ]);
      }, timeToGrow);
    }, 1000 * 60 * 60 * 24);
    return () => clearInterval(timer);
  }, [flowers]);

  function handleTaskGrow(index, isCompleted) {
    if (!isCompleted) {
      const updatedTasks = [...tasks];
      updatedTasks[index].isCompleted = true;
      setTasks(updatedTasks);

      const gardenSize = Math.ceil(Math.sqrt(garden.length + 1));
      const flowerSize = Math.floor(Math.random() * 3) + 1;
      const row = Math.floor(Math.random() * gardenSize) + 1;
      const col = Math.floor(Math.random() * gardenSize) + 1;
      const updatedGarden = [...garden];
      updatedGarden.push({ size: flowerSize, row, col });
      setGarden(updatedGarden);

      const updatedFlowers = [...flowers];
      updatedFlowers.push({ size: flowerSize });
      setFlowers(updatedFlowers);
    }
  }
  
  

function addTask(e) {
e.preventDefault();
const taskName = e.target.taskName.value;
const taskDueDate = new Date(e.target.taskDueDate.value);
setTasks([...tasks, { name: taskName, dueDate: taskDueDate, isCompleted: false }]);
e.target.reset();
}

function resetList() {
setTasks([]);
setFlowers([]);
}

function deleteTask(index) {
const updatedTasks = [...tasks];
updatedTasks.splice(index, 1);
setTasks(updatedTasks);
}

  return (
  <div className="App">
    <h1>To-Do List App</h1>
  <div className="task-list">
    {tasks.map((task, index) => (
<Task
key={index}
task={task}
onGrow={() => handleTaskGrow(index, task.isCompleted)}
onDelete={() => deleteTask(index)}
/>

))}
  </div>
  <div className="garden">
    {garden.map((flower, index) => (
  <div key={index} className="flower-container">
    
    <img
             style={{
              width: 20 * flower.size,
              height: 20 * flower.size,

              animation: `grow-${flower.size} 1s forwards`,
            }}
            

className="flower"
alt="flower"
src="/flower.png"
/>
  
</div>


))}
</div>
<form onSubmit={(e) => addTask(e)}>
  <input type="text" name="listName" placeholder="List name" value={listName} onChange={(e) => setListName(e.target.value)} />
  <input type="text" name="userName" placeholder="Your name" value={userName} onChange={(e) => setUserName(e.target.value)} />
  <input type="text" name="taskName" placeholder="Task name" />
  <input type="datetime-local" name="taskDueDate" />
  <button type="submit">Add Task</button>
</form>

<button className="reset-list" onClick={() => resetList()}>
Reset List
</button>

</div>
);
}

export default App;
