import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import auth from '../firebase';
import Button from '@mui/material/Button';

const AuthenticationButton = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsAuthenticated(!!user);
        });

        return () => unsubscribe();
    }, []);

    const handleClick = async () => {
        if (isAuthenticated) {
            await auth.signOut();
        } else {
            const email = prompt('Введите ваш email:');
            const password = prompt('Введите ваш пароль:');

            try {
                await auth.signInWithEmailAndPassword(email, password);
            } catch (error) {
                console.error('Ошибка входа:', error);
            }
        }
    };

    return (
        <Button variant="contained" color="primary" onClick={handleClick}>
            {isAuthenticated ? 'Выйти' : 'Войти'}
        </Button>
    );
};

export default AuthenticationButton;
