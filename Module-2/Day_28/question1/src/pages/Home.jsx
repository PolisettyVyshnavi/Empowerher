// pages/Home.js
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to Home Page</h1>
    <Link to="/login">Go to Login</Link>
  </div>
);

export default Home;