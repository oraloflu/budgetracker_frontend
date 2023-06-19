import React, { useState, ChangeEvent, SyntheticEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Form/Button';
import FormRow from '../components/Form/FormRow';
import FormTitle from '../components/Form/FormTitle';
import { Navbar } from '../components';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { toast } from 'react-toastify';
import { loginUser, registerUser } from '../features/user/userSlice';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  isMember: true
};

export default function Login(): JSX.Element {
  const [values, setValues] = useState(initialState);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line
  const { user, isLoading } = useAppSelector((store) => store.user);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    const name = event.target.name;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { firstname, lastname, email, password, isMember } = values;

    if (!firstname || !lastname || !email || !password) {
      toast.error('Please fill out all required fields');
    }

    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ firstname, lastname, email, password }));
    navigate('/');
  };

  /*   const toggleMember = (): void => {
    setValues({ ...values, isMember: !values.isMember });
  }; */

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full flex flex-col justify-center items-center -mt-10">
        <div className="w-full">
          <form
            action=""
            className="flex flex-col justify-center items-center rounded shadow-md m-auto mt-4 mb-6 pt-4 pb-10 px-10 w-1/4 h-auto bottom-28 border-2"
            onSubmit={handleSubmit}
          >
            <FormTitle title={values.isMember ? 'Login' : 'Register'} />
            {!values.isMember && (
              <>
                <FormRow
                  name="firstname"
                  text="Firstname"
                  type="text"
                  placeholder=""
                  value={values.firstname}
                  onchange={handleChange}
                />
                <FormRow
                  name="lastname"
                  text="Lastname"
                  type="text"
                  placeholder=""
                  value={values.lastname}
                  onchange={handleChange}
                />
              </>
            )}
            <FormRow
              name="email"
              text="Email"
              type="email"
              placeholder=""
              value={values.email}
              onchange={handleChange}
            />
            <FormRow
              name="password"
              text="Password"
              type="password"
              placeholder=""
              value={values.password}
              onchange={handleChange}
            />
            <Button
              id="btnLogin"
              type="button"
              text={values.isMember ? 'Login' : 'Register'}
              onclick={() => null}
            />
            <small className="font-normal text-sm text-cyan-800 ml-4 mt-4 block">
              {values.isMember && (
                <Link to="/forgot-password">Forgot your password?</Link>
              )}
              {!values.isMember && <Link to="/login">Already a member?</Link>}
            </small>
          </form>
        </div>
      </section>
    </>
  );
}
