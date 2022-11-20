import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { textState } from "./atom";
import styles from "./App.module.css";

function App() {
  const [text, setText] = useRecoilState(textState);
  const [state, setState] = useState<boolean>(false);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    setText(value);
    setState(false);
  }, []);

  const handleSlide = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    if (Number(value) > 90) {
      navigator.clipboard
        .writeText(text)
        .then(() => setState(true))
        .catch(() => setState(false));
    }
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
          <input
            type="range"
            defaultValue="0"
            className={styles.confirm}
            onChange={handleSlide}
          />
        )}
      </p>
    </div>
  );
}

export default App;
