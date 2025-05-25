import './index.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LandPage } from './landpage/landpage.tsx';
import Index from './admin/index.tsx'
function App() {

  return (
    <>
    <Router>
      <Routes>
         <Route path='/' element={<Navigate to="/landpage" />} />
          <Route path='/landpage' element={<LandPage/>}/>
          <Route path='/admin' element={<Index/>}/>
      </Routes>
    </Router>
         
    </>
  )
}

export default App
