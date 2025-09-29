import AddTodo from "@/components/AddTodo";
import Todo from "@/components/Todo"
export default function Home() {
  return (
    <div className="font-sans gap-4 flex flex-col items-center justify-center min-h-screen sm:p-20 bg-zinc-900">
      <h1>Redux Toolkit Learning</h1>
      <AddTodo />
      <Todo/>
    </div>
  );
}