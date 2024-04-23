import { useState } from "react";
import "./styles.css";
import MatchesIcon from "./Icons/Matches";

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

  const groupPoints = (points) => {
    const casitasCompletas = Math.floor(points / 5);
    const resto = points % 5;

    const casas = Array.from({ length: casitasCompletas });
    const restosPalitos = Array.from({ length: resto });

    return (
      <div>
        {casas.map((_, index) => {
          const palitos = Array.from({ length: 5 });
          return (
            <div key={index} className="casita">
              {palitos.map((_, index) => (
                <div className="palitos" key={index}>
                  <MatchesIcon width={8} />
                </div>
              ))}
            </div>
          );
        })}
        {casitasCompletas < 6 && (
          <div className="casita">
            {restosPalitos.map((_, index) => (
              <div className="palitos" key={index}>
                <MatchesIcon width={8} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="background">
      <div className="content">
        <h1>Puntos</h1>

        <div className="points">
          <div className="boards">
            <div className="casitas">
              {groupPoints(pointsT1)}
              <div className="horizontal left" />
              <div className="vertical left" />
            </div>

            <div className="buttons t1">
              <button className="rounded-button" onClick={handleAddT1}>
                +1
              </button>
              <button className="rounded-button" onClick={handleSubtractT1}>
                -1
              </button>
            </div>
          </div>
          <div className="boards">
            <div className="casitas">
              {groupPoints(pointsT2)}
              <div className="horizontal right" />
            </div>

            <div className="buttons t2">
              <button className="rounded-button" onClick={handleAddT2}>
                +1
              </button>
              <button className="rounded-button" onClick={handleSubtractT2}>
                -1
              </button>
            </div>
          </div>
        </div>
        <button className="rounded-button" onClick={handleReset}>
          Resetear
        </button>
      </div>
    </div>
  );
};

export default App;
