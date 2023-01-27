import { Link } from "react-router-dom";
import Button from "../components/Button";
import FormRow from "../components/FormRow";
import FormTitle from "../components/FormTitle";


export default function Login() {
    return (
        <section className="h-auto w-full mt-6">
            <form action=""
                className="rounded shadow-md m-auto mt-4 mb-6 pt-4 pb-10 px-6 
                w-1/4 h-auto bottom-28 border-2">
                <FormTitle />
                <FormRow
                    name="email"
                    text="Email"
                    type="email"
                />
                <FormRow
                    name="password"
                    text="Password"
                    type="password"
                />
                <Button
                    text="Login"
                    onclick={() => null}
                />
                <small className="font-normal text-sm ml-4 mt-4 block">
                    Forgot your password
                </small>
            </form>
            <Link to="/landing">
                Go To Landing
            </Link>
        </section>
    );
}