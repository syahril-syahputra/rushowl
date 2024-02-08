import React, { useState, useCallback, useMemo } from 'react';
import InputText from '../components/base/InputText';
import {
    faEnvelope,
    faKey,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import api from '../libs/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LoginData {
    email: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const [isLoading, setisLoading] = useState(false);
    const [formData, setFormData] = useState<LoginData>({
        email: '',
        password: '',
    });

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prevData) => ({
                ...prevData,
                [event.target.name]: event.target.value,
            }));
        },
        []
    );

    const isEmailValid = useMemo(() => {
        const emailRegex =
            /^((?!\.(@))([^@+\s]+)(?!@+\.)@([^@+\s]+\.)+([.a-z]{2,6}))?$/;
        return emailRegex.test(formData.email);
    }, [formData.email]);

    const handleSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            if (!isEmailValid) {
                alert('Please enter a valid email address.');
                return;
            }

            setisLoading(true);
            try {
                const response = await api.post('/login', {
                    ...formData,
                });
                console.log('Login successful:', response.data);
            } catch (error) {
                console.error('Login failed:', error);
                alert('Login failed. Please check your credentials.');
            } finally {
                setisLoading(false);
            }
        },
        [formData, isEmailValid]
    );

    return (
        <div className="flex h-screen items-center px-8">
            <form
                onSubmit={handleSubmit}
                className="container flex flex-col space-y-8 border border-slate-200 p-8 shadow-lg"
            >
                <InputText
                    placeholder="Your Email"
                    icon={faEnvelope}
                    type="email"
                    name="email"
                    block
                    value={formData.email}
                    onChange={handleChange}
                />
                <InputText
                    icon={faKey}
                    placeholder="Your Password"
                    type="password"
                    name="password"
                    block
                    value={formData.password}
                    onChange={handleChange}
                />

                <button
                    disabled={isLoading}
                    className="mx-auto cursor-pointer rounded-md bg-orange-700 px-8 py-4 font-bold text-white hover:bg-orange-400 hover:text-slate-700"
                    type="submit"
                >
                    {isLoading && (
                        <FontAwesomeIcon
                            icon={faSpinner}
                            size="lg"
                            className="mr-2 animate-spin"
                        />
                    )}
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
