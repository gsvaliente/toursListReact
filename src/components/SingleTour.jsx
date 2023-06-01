import { useState } from 'react';

export const SingleTour = ({
  id,
  name,
  info,
  image,
  price,
  handleRemoveTour,
}) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const smallInfo = `${info.substring(0, 200)}... `;

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {!isReadMore ? smallInfo : info}
          <button
            type="button"
            className="info-btn"
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? ' read less' : ' read more'}
          </button>
        </p>
        <button
          type="button"
          onClick={() => handleRemoveTour(id)}
          className="btn btn-block delete-btn"
        >
          not interested
        </button>
      </div>
    </article>
  );
};
