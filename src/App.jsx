import { useState } from "react";
import "./styles.css";

const App = () => {
  const [pointsT1, setPointsT1] = useState(0);
  const [pointsT2, setPointsT2] = useState(0);

  const handleAddT1 = () => {
    if (pointsT1 < 30) {
      setPointsT1(pointsT1 + 1);
    }
  };

  const handleSubtractT1 = () => {
    if (pointsT1 > 0) {
      setPointsT1(pointsT1 - 1);
    }
  };

  const handleAddT2 = () => {
    if (pointsT2 < 30) {
      setPointsT2(pointsT2 + 1);
    }
  };

  const handleSubtractT2 = () => {
    if (pointsT2 > 0) {
      setPointsT2(pointsT2 - 1);
    }
  };

  const handleReset = () => {
    setPointsT1(0);
    setPointsT2(0);
  };

  return (
    <div className="background">
      <div className="content">
        <h1>Puntos</h1>

        <div className="points">
          <div>
            pointsT1 = {pointsT1}
            <button onClick={handleAddT1}>+1</button>
            <button onClick={handleSubtractT1}>-1</button>
          </div>

          <div>
            pointsT2 = {pointsT2}
            <button onClick={handleAddT2}>+1</button>
            <button onClick={handleSubtractT2}>-1</button>
          </div>
        </div>
        <button onClick={handleReset}>Resetear</button>
      </div>
    </div>
  );
};

export default App;
