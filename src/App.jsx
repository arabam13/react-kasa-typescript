import { Routes, Route } from 'react-router-dom';
import './App.scss';
import RootLayout from './RootLayout.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import Error from './components/Error.jsx';
import Property from './pages/Property.jsx';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
