import AppContextProvider from './context/AppContext';
import AppRouter from './Router/AppRouter';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </div>
  );
}

export default App;
