import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';

// Remove App.css import as we use Tailwind logic in index.css
// import './App.css' 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
