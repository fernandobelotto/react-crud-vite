import { useState } from "react";
import Item from "./Item";

type Item = {
  id: string;
  name: string;
};

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState<string>("");

  function handleDelete(id: string) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleEdit(value: string, id: string) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, name: value };
      }
      return item;
    });

    setItems(newItems);
  }

  function handleCreate() {
    let item = {
      id: Math.random().toString(),
      name: name,
    };
    setItems([...items, item]);
  }

  return (
    <>
      <h1>Simple CRUD</h1>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <button onClick={handleCreate}>Criar</button>
      </div>
      <div>
        {items.map((item) => {
          return (
            <>
              <Item
                item={item}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
