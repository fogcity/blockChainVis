import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import Home from './pages/home';


function App() {
  return (
    <div >
      <Routes>
        <Route exact path="/" element={<Home />} />
      
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';

  return (
    <Router basename={basename}>
      <App />
    </Router>
  );
}
