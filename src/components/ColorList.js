import React, { useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import EditMenu from './EditMenu';

const initialColor = {
  color: "",
  code: { hex: "" }
};



const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth().put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
      .then(resp => {
        console.log(resp.data)
        //updateColors(resp.data)
        // only getting back the edited color?? why aren't I getting back the whole array??  I need the whole colors array, with the updated value, so that I can do updateColors(resp.data)
      })
      .catch(err => {
        console.log(err);
      })
  };

  const deleteHandler = (id) => {
    updateColors(colors.filter(item=>(item.id !== Number(id))))
  }

  const deleteColor = color => {
    axiosWithAuth().delete(`http://localhost:5000/api/colors/${color.id}`)
      .then(resp => {
        deleteHandler(color.id)
      })
      .catch(err=> {
        console.log(err.response)
      })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.