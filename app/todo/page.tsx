// app/todo/page.tsx
'use client';

import { useState } from 'react';

export default function Todo() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">ToDoリスト</h1>
      <div className="flex items-center gap-4 justify-center mt-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="タスクを入力"
          className="border-2 border-gray-200 rounded-md p-2 focus:outline-none focus:border-green-300 focus:ring-1 focus:ring-green-300"
        />
        <button onClick={addTask} className="bg-green-500 font-bold text-white p-2 rounded-md">追加</button>
      </div>
      <ul className="mt-6 flex flex-col gap-2">
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}