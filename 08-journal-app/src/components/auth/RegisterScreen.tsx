import { ChangeEvent, Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';
import { AuthActionType, UIActionType } from '../../action-types/types';
import { startRegisterWithEmailPasswordName } from '../../action-creators/auth';
import { RootState } from '../../interfaces/states';


interface FormLoginValues {
    name: string;
    email: string;
    password: string;
    password2: string;
}

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError, loading } = useSelector((state: RootState) => state.ui)

    const { name, email, password, password2, handleInputChange } = useForm<FormLoginValues>({
        name: 'Hernando',
        email: 'nando@gmail.com',
        password: '123456',
        password2: '123456'
    });


    const handleRegister = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            console.log('Name is required')
            dispatch(setError('Name is required'))
            return false;
        } else if (!validator.isEmail(email)) {
            console.log('Email is not valid')
            dispatch(setError('Email is not valid'))
            return false;
        } else if (password !== password2 || password.length < 5) {
            console.log('Password should be at least 6 characteres and match each other')
            dispatch(setError('Password should be at least 6 characteres and match each other'))
            return false;
        }
        console.log('Un set Error')
        dispatch(removeError())
        return true;
    }
    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form 
            onSubmit={handleRegister}
            className="animate__animated animate__fadeIn animate__faster">
                {
                    msgError &&
                    (
                        <div className='auth__alert-error'>
                            {msgError}
                        </div>
                    )
                }
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

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

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                    disabled={loading}
                >
                    Register
                </button>

                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
