import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import FormRow from '../components/FormRow';
import FormTitle from '../components/FormTitle';

export default function Login(): JSX.Element {
  const [firstname, setfirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isMember = false;

  return (
    <section className="h-auto w-full mt-6">
      <form
        action=""
        className="rounded shadow-md m-auto mt-4 mb-6 pt-4 
                pb-10 px-10 w-1/4 h-auto bottom-28 border-2"
      >
        <FormTitle title={isMember ? 'Login' : 'Register'} />
        {!isMember && (
          <>
            <FormRow
              name="firstname"
              text="Firstname"
              type="text"
              placeholder=""
              value={firstname}
              onchange={(e) => setfirstname(e.target.value)}
            />
            <FormRow
              name="lastname"
              text="Lastname"
              type="text"
              placeholder=""
              value={lastname}
              onchange={(e) => setLastname(e.target.value)}
            />
            <FormRow
              name="username"
              text="Username"
              type="text"
              placeholder=""
              value={username}
              onchange={(e) => setUsername(e.target.value)}
            />
            <FormRow
              name="dob"
              text="Birthday"
              type="text"
              placeholder=""
              value={dob}
              onchange={(e) => setDOB(e.target.value)}
            />
          </>
        )}
        <FormRow
          name="email"
          text="Email"
          type="email"
          placeholder=""
          value={email}
          onchange={(e) => setEmail(e.target.value)}
        />
        <FormRow
          name="password"
          text="Password"
          type="password"
          placeholder=""
          value={password}
          onchange={(e) => setPassword(e.target.value)}
        />
        <Button
          id="btnLogin"
          type="button"
          text={isMember ? 'Login' : 'Register'}
          onclick={() => null}
        />
        <small className="font-normal text-sm text-cyan-800 ml-4 mt-4 block">
          {isMember && <Link to="/forgot-password">Forgot your password?</Link>}
          {!isMember && <Link to="/login">Already a member?</Link>}
        </small>
      </form>
      <Link to="/landing">Go To Landing</Link>
    </section>
  );
}
