import { useState } from "react";
import { useEffect } from "react";

const FollowMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const text = !enabled
    ? "Activate Pointer Follower"
    : "Desactivate Pointer Follower";

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled === true) {
      window.addEventListener("pointermove", handleMove);
    }
    //cleanup:
    //-> when the component is desmount
    //-> when dependencies changes
    return () => {
      window.removeEventListener("pointermove", handleMove);
    }; //execute to clean the effect;
  }, [enabled]);
  const handleClick = () => {
    return setEnabled(!enabled);
  };
  return (
    <>
      <div
        style={{
          position: "absolute",
          background: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};
function App() {
  return (
    <>
      <main>
        <FollowMouse />
      </main>
    </>
  );
}

export default App;
