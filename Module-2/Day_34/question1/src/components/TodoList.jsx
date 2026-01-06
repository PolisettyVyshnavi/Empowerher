import { Card, CardHeader, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, done: false }]);
      setTask("");
    }
  };

  const toggleDone = (i) => {
    const updated = [...todos];
    updated[i].done = !updated[i].done;
    setTodos(updated);
  };

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>Todo List</CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a task..."
          />
          <Button onClick={addTodo}>Add</Button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo, i) => (
            <li key={i} className="flex items-center gap-2">
              <Checkbox
                checked={todo.done}
                onCheckedChange={() => toggleDone(i)}
              />
              <span className={todo.done ? "line-through text-gray-500" : ""}>
                {todo.text}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}