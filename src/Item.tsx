import React, { useState } from "react";

export default function Item({ item, handleDelete, handleEdit }: any) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [name, setName] = useState<string>(item.name);

  return (
    <>
      {isEditing ? (
        <>
          <div>
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <button onClick={() => setIsEditing(false)}>cancelar</button>
            <button
              onClick={() => {
                handleEdit(name, item.id);
                setIsEditing(false);
              }}
            >
              salvar
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <h3>{item.name}</h3>
            <button onClick={() => handleDelete(item.id)}>deletar</button>
            <button onClick={() => setIsEditing(true)}>editar</button>
          </div>
        </>
      )}
    </>
  );
}
