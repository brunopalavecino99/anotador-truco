import { useState } from "react";
import "./styles.css";
import MatchesIcon from "../../Icons/Matches";
import Modal from "../../components/modals/Modal";

const Anotador = () => {
  const [pointsT1, setPointsT1] = useState(
    parseInt(localStorage.getItem("pointsT1")) || 0
  );
  const [pointsT2, setPointsT2] = useState(
    parseInt(localStorage.getItem("pointsT2")) || 0
  );

  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const handleOpenResetModal = () => {
    setIsResetModalOpen(true);
  };

  const handleCloseResetModal = () => {
    setIsResetModalOpen(false);
  };

  const handleAddT1 = () => {
    if (pointsT1 < 30) {
      const newPointsT1 = pointsT1 + 1;
      setPointsT1(newPointsT1);
      localStorage.setItem("pointsT1", newPointsT1.toString());
    }
  };

  const handleSubtractT1 = () => {
    if (pointsT1 > 0) {
      const newPointsT1 = pointsT1 - 1;
      setPointsT1(newPointsT1);
      localStorage.setItem("pointsT1", newPointsT1.toString());
    }
  };

  const handleAddT2 = () => {
    if (pointsT2 < 30) {
      const newPointsT2 = pointsT2 + 1;
      setPointsT2(newPointsT2);
      localStorage.setItem("pointsT2", newPointsT2.toString());
    }
  };

  const handleSubtractT2 = () => {
    if (pointsT2 > 0) {
      const newPointsT2 = pointsT2 - 1;
      setPointsT2(newPointsT2);
      localStorage.setItem("pointsT2", newPointsT2.toString());
    }
  };

  const handleReset = () => {
    setPointsT1(0);
    setPointsT2(0);
    localStorage.removeItem("pointsT1");
    localStorage.removeItem("pointsT2");
    setIsResetModalOpen(false);
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
                  <MatchesIcon width={6} />
                </div>
              ))}
            </div>
          );
        })}
        {casitasCompletas < 6 && (
          <div className="casita">
            {restosPalitos.map((_, index) => (
              <div className="palitos" key={index}>
                <MatchesIcon width={6} />
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
        <div className="banner"></div>
        <div className="points">
          <div className="boards">
            <h2>Nosotros</h2>
            <div className="casitas">
              {groupPoints(pointsT1)}
              <div className="vertical left" />
              <div className="horizontal left" />
            </div>

            <div className="buttons t1">
              <button className="rounded-button" onClick={handleAddT1}>
                + 1
              </button>
              <button className="rounded-button" onClick={handleSubtractT1}>
                - 1
              </button>
            </div>
          </div>
          <div className="boards">
            <h2>Ellos</h2>
            <div className="casitas">
              {groupPoints(pointsT2)}
              <div className="horizontal right" />
            </div>
            <div className="buttons t2">
              <button className="rounded-button" onClick={handleAddT2}>
                + 1
              </button>
              <button className="rounded-button" onClick={handleSubtractT2}>
                - 1
              </button>
            </div>
          </div>
        </div>

        <button className="rounded-button reset" onClick={handleOpenResetModal}>
          Resetear
        </button>
      </div>

      <Modal isOpen={isResetModalOpen} onClose={handleCloseResetModal}>
        <div className="reset-modal">
          <div className="modal-title">Seguro queres reiniciar?</div>
          <div className="modal-buttons-container">
            <button className="modal-button" onClick={handleReset}>
              Si
            </button>
            <button className="modal-button" onClick={handleCloseResetModal}>
              No
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Anotador;
