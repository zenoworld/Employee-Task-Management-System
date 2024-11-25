import React, { useContext } from 'react';
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTask from './NewTask';
import { UserContext } from '../../Context/UserContext';

const TaskList = () => {
  const { loggedInUserData } = useContext(UserContext); 
  const tasks = loggedInUserData.tasks;
  // console.log(loggedInUserData);
  
  return (
    <div
      id="tasklist"
      className="flex flex-nowrap overflow-x-auto justify-start items-center gap-5 h-[55%] w-full py-6 mt-10"
    >
      {tasks.map((task, index) => {
        if (task.active) return <AcceptTask key={index} emp={loggedInUserData} data={task} />;
        if (task.newtask) return <NewTask key={index} emp={loggedInUserData} data={task} />;
        if (task.completed) return <CompleteTask key={index} data={task} />;
        if (task.failed) return <FailedTask key={index} data={task} />;
        return null;
      })}
    </div>
  );
};

export default TaskList;
