
import React from "react";
import image from "./image.png";
import "./SideStyle.scss";

interface SideProps {
  title: string;
  text: string;
}

const Side: React.FC<SideProps> = ({ title, text }) => {
  return (
    <div className="side-container">
      <h1 className="side-title">{title}</h1>
      <p className="side-text">{text}</p>

      <img src={image} alt="My Image" className="side-image" />
    </div>
  );
};

export default Side;












// import React from "react";
// import image from "./image.png";
// import "./SideStyle.scss";

// const Side: React.FC = () => {
//   return (
//     <div className="side-container">
//       <h1 className="side-title">Let's talk about everything!</h1>
//       <p className="side-text">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
//         debitis, fugit natus?
//       </p>

//       <img src={image} alt="My Image" className="side-image" />
//     </div>
//   );
// };

// export default Side;