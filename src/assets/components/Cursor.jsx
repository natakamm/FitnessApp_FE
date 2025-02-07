import useMousePosition from "../../hooks/useMousePosition";

const Cursor = () => {
  const position = useMousePosition();
  const cursorDiameter = 16; // Diameter of the custom cursor (circle)

  // Ensure the cursor stays within the viewport bounds
  const x = Math.min(
    window.innerWidth - cursorDiameter,
    Math.max(0, position.x - cursorDiameter / 2)
  );
  const y = Math.min(
    window.innerHeight - cursorDiameter,
    Math.max(0, position.y - cursorDiameter / 2)
  );

  return (
    <div
      className="w-4 h-4 rounded-full border-customPrimary bg-customTertiary"
      style={{
        position: "absolute",
        left: x,
        top: y,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    ></div>
  );
};

export default Cursor;
