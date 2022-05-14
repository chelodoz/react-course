import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmailPasword, startGoogleLogin } from '../../action-creators/auth';
import { useForm } from '../../hooks/useForm';
import { RootState } from '../../interfaces/states';

interface FormLoginValues {
    email: string;
    password: string;
}

export const LoginScreen: React.FC = () => {

    const dispatch = useDispatch();

    const { loading } = useSelector((state: RootState) => state.ui)


    const { email, password, handleInputChange } = useForm<FormLoginValues>({
        email: 'nando@gmail.com',
        password: '123456'
    });

    const handleLogin = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(startLoginEmailPasword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form 
            onSubmit={handleLogin}
            className="animate__animated animate__fadeIn animate__faster"
            >

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >
                    Login
                </button>


                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>

            </form>
        </>
    )
}
