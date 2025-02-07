import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // the setFromEvent function gets called whenever the "mousemove" event below takes place, so whenever the mouse moves and calculates the position of the mouse based on clientX and clientY
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    //here we add an event listener to listen for the event "mouseover" and act accordingly when found, with setFromEvent
    window.addEventListener("mousemove", setFromEvent);
    //clean up of the event listener
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  //hook returns the position state, which contains the current x and y coordinates of the mouse
  return position;
};

export default useMousePosition;
