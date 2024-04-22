import { Button } from "@mui/material";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Counter.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Counter = () => {
  const [count, setCount] = useState(0);
  const calculateBackgroundColor = () => {
    const colorValue = Math.min(count * 10, 255);
    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  };

  const backgroundColorSpring = useSpring({
    backgroundColor: calculateBackgroundColor(),
  });

  return (
    <div className="counter-container">
      {" "}
      <animated.div
        className="animated-div"
        style={{ ...backgroundColorSpring }}
      >
        <div>
          <p>{count}</p>
          <p>Counter</p>
          <Button variant="contained" color="success" onClick={()=>setCount(count+1)}>
            <AddIcon/>
          </Button>
          <Button variant="contained" color="error" onClick={()=>setCount(0)}>
            Reset
          </Button>
          <Button variant="contained" onClick={() => count > 0 && setCount(count - 1)}>
            <RemoveIcon/>
          </Button>
        </div>
      </animated.div>
    </div>
  );
};

export default Counter;
