import { TextField } from '@consta/uikit/TextField';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainPage.module.css'
import { Button } from '@consta/uikit/Button';
import { useEffect } from 'react';
import { IconHealth } from '@consta/icons/IconHealth';

export function MainPage() {
    const [token, setToken] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    useEffect(() => {
        const savedToken = localStorage.getItem('accessToken');
        if (savedToken) {
            setToken(savedToken);
            setIsSubmitted(true); 
        }
    }, []);

    const handleTokenChange = (newValue: string | null | undefined) => {
        const value = newValue || '';
        setToken(value);
    };

    const handleClearToken = () => {
        setToken('');
        setIsSubmitted(false);
        localStorage.removeItem('accessToken');
    };

    const handleSubmitToken = () => {
        if (!token.trim()) {
            alert('Введите токен');
            return;
        }
        localStorage.setItem('accessToken', token);
        setIsSubmitted(true);
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmitToken();
        }
    };
    return (
        <div className={styles.tools}>
            <div className={styles.inputToken}>
                <TextField
                    type='password'
                    required 
                    value={token}
                    placeholder="Введите accessToken"
                    onChange={( value ) => handleTokenChange(value)}
                    onKeyDown={handleKeyDown} 
                />
                <IconHealth onClick={handleSubmitToken} view='ghost' className={styles.accessButton}/>
            </div>
             <div className={styles.startButton}>
                {isSubmitted ? (
                    <>
                        <div className={styles.changeMode}>
                            <Link to="/users" className={styles.linkButton}>
                                <Button label="Users" className={styles.btns} />
                            </Link>
                            <Link to="/posts" className={styles.linkButton}>
                                <Button label="Posts" className={styles.btns} />
                            </Link>
                        </div>
                        <Button label="Очистить токен" onClick={handleClearToken} />
                    </>
                ) : (
                    <p className={styles.warning}>Введите access token для продолжения</p>
                )}
            </div>

        </div>
    )
}