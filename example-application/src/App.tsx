import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import type { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './redux/reducers/counterReducer'

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer noopener">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer noopener">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => { dispatch(increment()); }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
