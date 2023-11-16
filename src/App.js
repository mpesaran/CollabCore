import { BrowserRouter , Route , Routes , Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
import { useAuthContext } from './hooks/useAuthContext';
import OnlineUsers from './components/OnlineUsers';

//styles
import './App.css';
import Sidebar from './components/Sidebar';



function App() {
  const { user , authIsReady} = useAuthContext()

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter >
          {user  && <Sidebar />}
          <div className='container'>
            <Navbar />
            <Routes>
              <Route path= '/' element= {user ? <Dashboard /> : <Navigate to="/login" /> } />
              <Route path= '/login' element= {user ? <Navigate to="/" /> : <Login />} />
              <Route path= '/create' element= {user ? <Create /> :<Navigate to="/login" /> } />
              <Route path= '/signup' element= {user ? <Navigate to="/" /> : <Signup />} />
              <Route path= '/projects/:id' element= {user ?  <Project /> : <Navigate to="/login" /> } />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
