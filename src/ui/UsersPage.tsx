import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';
import styles from './UserList.module.css'
import { useNavigate } from 'react-router-dom';
import { UsersList } from './UsersList';
import { PageBar } from './PageBar';
import { useState } from 'react';

const pagesSimple = ['Main', 'Users'];
export function UsersPage() {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [cntItms, setCntItms] = useState(10);

    const changePage = (numberPage: number) => {
        setPage(numberPage);
    }
    const changeItemsCount = (itemsCount : number) => {
        setCntItms(itemsCount);
    }
    return (
        <div>
            <header className={styles.header}>
            <Breadcrumbs 
                items={pagesSimple} 
                size='l' 
                getItemLabel={(item) => item} 
                getItemOnClick={(item) => (e: React.MouseEvent) => {
                        e.preventDefault();
                        if (item === 'Main') navigate('/');
                }}
                />
            </header>
            <PageBar changePage={changePage} changeItemsCount={changeItemsCount}/>
            <UsersList page={page} cntItms={cntItms}/>
        </div>
    )
}