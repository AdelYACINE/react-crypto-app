import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="#e1187d"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
