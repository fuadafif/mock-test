import HomeNav from "../components/navbar/HomeNav";
import Footer from "../components/footer/Footer";
import style from "../styles/Home.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import Image from "next/image";

function Home() {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [randomScoreWin, setRandomScoreWin] = useState(0);
  const [randomScoreLost, setRandomScoreLost] = useState(0);

  const randomScore = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const toggle = () => {
    setModal(!modal);
    setRandomScoreWin(randomScore(1, 20));
    setRandomScoreLost(randomScore(1, 20));
  };

  return (
    <>
      <HomeNav />
      <div className="text-center">
        <h1 className="m-3">Our Products</h1>
      </div>
      <div className={style["container-fluid"]}>
        {/* 1 */}
        <div className={`card ${style.game}`}>
          <Image src="/img/home/rock-paper-scissors.jpg" className={`card-img-top ${style["img-game"]}`} alt="rock paper scissor" width={375} height={225} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Bicycle</h5>
            <p className="card-text">
              $ 150
              <br />
              <br />
            </p>
          </div>
        </div>

        {/* 2 */}

        <div className={`card ${style.game}`}>
          <Image src="/img/home/snake-game.jpg" className={`card-img-top ${style["img-game"]}`} alt="snake" width={375} height={225} />
          <div className="card-body  d-flex flex-column">
            <h5 className="card-title">Perfume</h5>
            <p className="card-text">$ 50</p>
          </div>
        </div>

        {/* 3 */}

        <div className={`card ${style.game}`}>
          <Image src="/img/home/chess.jpg" className={`card-img-top ${style["img-game"]}`} alt="snake" width={375} height={225} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Mouse</h5>
            <p className="card-text">$ 55</p>
          </div>
        </div>

        {/* 4 */}

        <div className={`card ${style.game}`}>
          <Image src="/img/home/solitaire.jpg" className={`card-img-top ${style["img-game"]}`} alt="snake" width={375} height={225} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Keyboard</h5>
            <p className="card-text">
              $ 100
              <br />
              <br />
            </p>
          </div>
        </div>

        {/* 5 */}
        <div className={`card ${style.game}`}>
          <Image src="/img/home/ctr.jpg" className={`card-img-top ${style["img-game"]}`} alt="snake" width={375} height={225} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Cable</h5>
            <p className="card-text">
              $ 25
              <br />
              <br />
            </p>
          </div>
        </div>

        {/* 6 */}
        <div className={`card ${style.game}`}>
          <Image src="/img/home/tetris.jpg" className={`card-img-top ${style["img-game"]}`} alt="snake" width={375} height={225} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Bottle</h5>
            <p className="card-text">
              $ 10
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
      {/* MODAL RANDOM SCORE */}
      <Modal
        isOpen={modal}
        toggle={toggle}
        modalTransition={{ timeout: 100 }}
        style={{
          width: 100,
        }}
      >
        <ModalBody>
          Win: {randomScoreWin} Lost: {randomScoreLost}
        </ModalBody>
      </Modal>
    </>
  );
}

export default Home;
