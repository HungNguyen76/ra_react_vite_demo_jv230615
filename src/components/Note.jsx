import { useState } from "react";
import { Input } from "antd";

const { TextArea } = Input;

export default function Note() {
  const storageNote = localStorage.getItem("note");

  const [note, setNote] = useState(storageNote ?? "");
  const handleTextareaChange = (event) => {
    setNote(event.target.value);
    localStorage.setItem("note", note);
  };

  return (
    <div>
      <TextArea
        value={note}
        rows={30}
        placeholder="Để nông dân biết code - Chỗ ghi chú của các bạn"
        maxLength={5000}
        onChange={handleTextareaChange}
      />
    </div>
  );
}
