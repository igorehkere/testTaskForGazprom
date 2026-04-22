import { useState, useEffect } from "react"
import { Loader } from '@consta/uikit/Loader';
import styles from './UserList.module.css'
import { getName } from "../utils/getName";
import { useNavigate } from "react-router-dom";

type user = {
    name: string,
    email: string,
    id: number,
    gender: string,
    status: string,
}
type props = {
    page: number,
    cntItms: number,
}

export function UsersList ({ page, cntItms }: props) {
    const [users, setUsers] = useState<null | Array<user>>(null);
    const navigate = useNavigate();

    useEffect(() => {
        setUsers(null);
        fetch(`https://gorest.co.in/public/v2/users?page=${page}&per_page=${cntItms}`).then(res => res.json()).then(js => setUsers(js));
    }, [page, cntItms])

    
    if (users === null) {
        return (
            <div className={styles.load}>
                <Loader size='m'/>
            </div>
        )
    }
    if (users.length === 0) {
        return (
            <div className={styles.load}>
                <h1>Список пользователей пуст</h1>
            </div>
        )
    }
    return (
        <div className={styles.userList}>
            <table className={styles.usersTable}>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        const nameUs = getName(user.name)
                        return (
                            <tr key={user.id} onClick={() => navigate(`/user/${user.id}`)}>
                                <td>{nameUs.firstName}</td>
                                <td>{nameUs.lastName}</td>
                                <td>{user.email}</td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}