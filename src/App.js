import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home/home.component';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default App;
