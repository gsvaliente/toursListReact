import { SingleTour } from './SingleTour';

export const TourList = ({ data, handleRemoveTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>

      <div className="tours">
        {data.map((tour) => {
          return (
            <SingleTour
              key={tour.id}
              {...tour}
              handleRemoveTour={handleRemoveTour}
            />
          );
        })}
      </div>
    </section>
  );
};
