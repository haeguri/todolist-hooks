import * as React from "react";
import { TodoActionContext } from "../App";

export default function TodoInput() {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = React.useContext(TodoActionContext);

  const handleChange = React.useCallback(() => {
    if (inputRef.current) {
      setValue(inputRef.current!.value);
    }
  }, [inputRef]);

  const handleSubmit = React.useCallback(() => {
    dispatch!({ type: "add", payload: value });
  }, [dispatch, value]);

  return (
    <form>
      <input type="text" value={value} ref={inputRef} onChange={handleChange} />
      <button type="button" onClick={handleSubmit}>
        ADD
      </button>
    </form>
  );
}
