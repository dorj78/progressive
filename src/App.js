import Home from './components/home.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App(){
  return(
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer/>
    </Router> 
  )
}
export default App;