import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";
const App = () => {
  // console.log(data[1]);

  const [count, setCount] = useState(1);
  const [texts, setTexts] = useState([]);
  const handleCount = (e) => {
    setCount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newParagraphs = data.slice(0, count);
    setTexts(newParagraphs);
  };
  return (
    <div className="section-center">
      <form
        onSubmit={handleSubmit}
        className="lorem-form "
        style={{ flexDirection: "column", gap: "2rem", marginBottom: "2rem" }}
      >
        <h4>Tired of boring lorem ipsum?</h4>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <label htmlFor="count">Paragraphs:</label>
          <input
            type="number"
            min={1}
            max={8}
            name="count"
            id="count"
            value={count}
            onChange={handleCount}
          />
          <button className="btn">generate</button>
        </div>
      </form>
      <div className="lorem-text">
        {texts.map((text) => {
          return (
            <p
              key={nanoid()}
              style={{
                marginBlockStart: "1em",
                marginBlockEnd: "1em",
              }}
            >
              {text}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default App;
