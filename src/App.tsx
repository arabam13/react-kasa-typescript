import '@/App.scss';
import RootLayout from '@/RootLayout';
import About  from '@/pages/About';
import Error from '@/pages/Error';
import Home from '@/pages/Home';
import Property from '@/pages/Property';
import { Route, Routes } from 'react-router-dom';

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
