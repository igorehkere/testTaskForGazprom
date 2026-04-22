import { TextField } from '@consta/uikit/TextField';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainPage.module.css'
import { IconSearchStroked } from '@consta/icons/IconSearchStroked';
import { Button } from '@consta/uikit/Button';


export function MainPage() {
    const [value, setValue] = useState<string | null | undefined>(undefined);
    return (
        <div className={styles.tools}>
            <div className={styles.inputToken}>
                <TextField
                    type='password'
                    required 
                    value={value}
                    placeholder="Введите accessToken"
                    onChange={( value ) => setValue(value)}
                />
                <IconSearchStroked view="ghost" />
            </div>
            <div className={styles.changeMode}>
                <Link to='/users' className={styles.linkButton}><Button label="Users" className={styles.btns}/></Link>
                <Link to='/posts' className={styles.linkButton}><Button label="Posts" className={styles.btns}/></Link>
            </div>

        </div>
    )
}