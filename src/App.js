import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/logIn/Login';
import Signup from './pages/signUp/Signup';
import Layout from './layout/Layout';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="log-in" element={ <Login/> } />
          <Route path="sign-up" element={ <Signup/> } />
          <Route path="profile" element={ <Profile/> } />
        </Routes>

      </Layout>
    </div>
  );
}

export default App;
