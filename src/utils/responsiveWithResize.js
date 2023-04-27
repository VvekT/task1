import Responsive from "@tds/core-responsive";
import React from "react";
const ResponsiveWithResize = (props) => {
  const [reRender, setReRender] = React.useState(true);
  React.useEffect(() => {
    function handleResize() {
      setReRender(false);
      // need timeout to wait till next event loop
      setTimeout(() => {
        setReRender(true);
      }, 1);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <>{reRender && <Responsive {...props} />}</>;
};

export default ResponsiveWithResize;
