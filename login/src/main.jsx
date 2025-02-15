import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './index.css'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import GateWay from './pages/GateWay.jsx';
import NotFound from './pages/NotFound.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<GateWay />} />

             <Route element={<PrivateRoute />}> 
                    <Route path="/home" element={<Home />} />
              </Route>

            <Route path='/cadastro' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
    </AuthProvider>
  </StrictMode>,
)
