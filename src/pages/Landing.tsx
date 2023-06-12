import { Link } from 'react-router-dom';

export default function Landing(): JSX.Element {
  return (
    <div>
      <div className="mt-4 mx-4">Landing Page</div>
      <div>
        <Link to="/login">Go To Login</Link>
      </div>
      <div>
        <Link to="/">Go To Stats</Link>
      </div>
    </div>
  );
}
