import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { textState } from "./atom";

function App() {
  const [text, setText] = useRecoilState(textState);
  const [state, setState] = useState<boolean>(false);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    setText(value);
  }, []);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => setState(true))
      .catch(() => setState(false));
  }, []);

  return (
    <div>
      <p>
        <input type="text" value={text} onChange={handleChange} />
      </p>
      <p>
        {state ? (
          "✅"
        ) : (
          <button
            type="button"
            autoFocus
            onClick={() => {
              copyToClipboard(text);
            }}
          >
            COPY
          </button>
        )}
      </p>
    </div>
  );
}

export default App;
