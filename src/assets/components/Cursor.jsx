import useMousePosition from "../../hooks/useMousePosition";

const Cursor = () => {
  const position = useMousePosition();
  return (
    <div
      className="w-4 h-4 rounded-full border-customPrimary bg-customTertiary"
      style={{
        position: "absolute",
        left: position.x - 8,
        top: position.y - 8,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    ></div>
  );
};

export default Cursor;
