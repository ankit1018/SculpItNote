import { useState } from "react";
import Button from "./Button";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function type(event) {
    var a = event.target.name;
    let value = event.target.value.slice(0, 200);
    setNote({ ...note, [a]: value });
  }

  return (
    <div
      className="addnote"
      style={props.mode ? { backgroundColor: "#171010" } : null}
    >
      <input
        style={
          props.mode ? { backgroundColor: "#171010", color: "#61677A" } : null
        }
        name="title"
        onChange={type}
        className="i addtitle"
        placeholder="Title"
        value={note.title}
      />
      <input
        style={
          props.mode ? { backgroundColor: "#171010", color: "#61677A" } : null
        }
        name="content"
        onChange={type}
        type="text"
        className="i addcontent"
        placeholder="Take a note"
        value={note.content}
        rows="5"
      />
      <Fab
        // style={{ backgroundColor: "#ff8989" }}
        style={
          props.mode
            ? {
                backgroundColor: "#423F3E",
                color: "#171010"
              }
            : { backgroundColor: "#ff8989" }
        }
        size="medium"
        color="primary"
        aria-label="add"
        mode={props.mode}
        onClick={() => {
          props.onclick(note);
          setNote({
            title: "",
            content: ""
          });
        }}
      >
        <AddIcon />
      </Fab>
      {/* <Button
        mode={props.mode}
        onclick={() => {
          props.onclick(note);
          setNote({
            title: "",
            content: ""
          });
        }}
      /> */}
    </div>
  );
}
