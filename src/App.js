import AppRoutes from './Router';
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
          <AppRoutes/>
      </Router>
    </div>
  );
}

export default App;
