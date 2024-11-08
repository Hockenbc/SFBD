import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import FindAPuppy from './pages/FindAPuppy';
import Pictures from './pages/Pictures';
import AboutUs from './pages/AboutUs';


export default function App() {
  return (
    <BrowserRouter basename={process.env. PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="findapuppy" element={<FindAPuppy />} />
          <Route path="pictures" element={<Pictures />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);