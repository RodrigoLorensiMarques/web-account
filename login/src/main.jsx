import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './index.css'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />

             <Route element={<PrivateRoute />}> 
                    <Route path="/home" element={<Home />} />
              </Route>

            <Route path='/cadastro' element={<Register />} />
            <Route path='*' element={<Login />} />
          </Routes>
        </Router>
    </AuthProvider>
  </StrictMode>,
)
