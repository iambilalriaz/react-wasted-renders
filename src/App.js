import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';

const App = () => {
  // React.memo does not memoize objects & arrays.
  // Then useMemo comes into the picture
  const array = useMemo(() => [1, 2, 3, 4, 5], []);

  const [count, setCount] = useState(0);

  // useCallback will prevent 'getData' from running in a non efficient way

  const getData = useCallback(
    (type) =>
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then((response) => response.json())
        .then((json) => console.log(json)),
    []
  );

  useEffect(() => {
    getData('todos');
  }, [getData]);
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Count is {count}</p>
        <p>
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            ADD
          </button>
        </p>
        <ChildComponent
          array={array}
          title='Child Component'
          getData={getData}
        />
      </header>
    </div>
  );
};

export default App;
