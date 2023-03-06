import React, { useEffect, useState } from "react";

function BackToTop() {
  const [backtop, setBackTop] = useState(0);

  const top = () => {
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 200) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  });

  return (
    <>
      {backtop && (
        <section>
          <div className="position-fixed end-0 bottom-0 z_index1 ">
            <button
              className="bg-info border-0 px-4 rounded-5 text-bg-primary py-2"
              onClick={() => top()}
            >
              Top
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default BackToTop;
