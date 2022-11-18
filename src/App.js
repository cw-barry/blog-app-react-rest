import { ToastContainer } from 'react-toastify';
import AppContextProvider from './context/AppContext';
import BlogContextProvider from './context/BlogContext';
import AppRouter from './Router/AppRouter';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <BlogContextProvider>
          <AppRouter />
          <ToastContainer />
        </BlogContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
