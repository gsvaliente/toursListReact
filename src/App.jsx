import { Loading, TourList } from './components';
import { useFetch } from './hooks/useFetch';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const {
    list: data,
    isLoading,
    isError,
    handleRestoreList,
    handleRemoveTour,
  } = useFetch(url);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (isError) {
    return <p>There was an error fetching the url</p>;
  }

  if (!data.length) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button
            type="button"
            style={{ marginTop: '2rem' }}
            className="btn"
            onClick={handleRestoreList}
          >
            Restore Tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <TourList data={data} handleRemoveTour={handleRemoveTour} />
    </main>
  );
};
export default App;
