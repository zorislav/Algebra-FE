import { useEffect, memo } from "react";

const myCom = memo(
  (props) => {},
  (previousProps, newProps) => {}
);

function Child2() {
  useEffect(() => {
    console.log("Child2 mounted");

    return () => {
      console.log("Child2 unmounted");
    };
  }, []);
  return <h3>Child2</h3>;
}

export default Child2;
