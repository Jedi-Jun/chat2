import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './Login/SignUp';

const Views = () => {
  return (
    <>
      <div>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>SingUp</Link>
      </div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </>
  );
};

export default Views;
