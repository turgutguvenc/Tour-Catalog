import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(true);
  function handleText() {
    // eslint-disable-next-line no-unused-expressions
    setReadMore(!readMore);
  }
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h3>{name}</h3>
          <h3 className="tour-price">${price}</h3>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)} ...`}
          <button onClick={handleText}>
            {readMore ? "show less" : "Show more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
