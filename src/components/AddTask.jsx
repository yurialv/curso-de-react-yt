import { Input } from "postcss";
import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit() {
    if (!title.trim() || !description.trim()) {
      return alert("Preencha o título e a descrição da tarefa.");
    }
    onAddTaskSubmit(title, description);
    setTitle("");
    setDescription("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault(); // impede o comportamento padrão
      handleSubmit();
    }
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da Tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSubmit}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
