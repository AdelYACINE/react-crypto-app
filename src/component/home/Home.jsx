import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Welcome To Crypto App"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className="home"
      >
        <div className="home-container">
          <div className="typewriter-container">
            <h1 className="typewriter">
              <span style={{ color: "white" }}>{text}</span>
              <Cursor cursorColor="white" cursorStyle="/" />
            </h1>
          </div>

          <img
            src="assets/pic-8.png"
            alt="pic8"
            className="img-center"
            loading="lazy"
          />

          <button
            type="button"
            className="btn btn-primary btn-crypto"
            onClick={() => {
              navigate("/crypto");
            }}
          >
            See Our Crypto
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
