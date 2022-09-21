import React, {useState} from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setInputName] = useState('')
  const [itemCategory, setInputCategory] = useState('Produce')

  function handleNameChange(event) {
    setInputName(event.target.value)
  }

  function handleCategoryChange(event) {
    setInputCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }
    onItemFormSubmit(newItem)
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleNameChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleCategoryChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
