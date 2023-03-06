import React, { useEffect, useState } from "react";

function Preloader() {
  const [loading, setLoading] = useState(0);

  if (loading) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="spinner overflow-hidden d-flex gap-4">
          <div className="bounce1" /> <div className="bounce2 " />{" "}
          <div className="bounce3" />{" "}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Preloader;
