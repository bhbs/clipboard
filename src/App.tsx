import { ChangeEvent, useCallback } from "react";
import { useRecoilState } from "recoil";
import { textState } from "./atom";
import styles from "./App.module.css";

function App() {
  const [text, setText] = useRecoilState(textState);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    setText(value);
  }, []);

  const handleSlide = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const value = target.value;
    if (Number(value) > 90) {
      navigator.clipboard.writeText(text).then(() => {
        window.close();
      });
    }
  }, []);

  return (
    <div>
      <p>
        <input
          type="text"
          value={text}
          className={styles.text}
          onChange={handleChange}
        />
      </p>
      <p>
        <input
          type="range"
          defaultValue="0"
          className={styles.confirm}
          onChange={handleSlide}
        />
      </p>
    </div>
  );
}

export default App;
