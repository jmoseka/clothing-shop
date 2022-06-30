import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home/home.component';
import Navigation from './components/routes/navigation/navigation.component';

const Shop = () => <h1>I am the shop page</h1>;

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>

      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />

    </Route>

  </Routes>
);

export default App;
