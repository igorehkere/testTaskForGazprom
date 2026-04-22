import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader } from '@consta/uikit/Loader';
import styles from './UserList.module.css';
import { Button } from '@consta/uikit/Button';
import { Link } from "react-router-dom";
import { IconDiamond } from '@consta/icons/IconDiamond';

//IconDiamond

type userDetail = {
    name: string,
    id: number,
    gender: string,
    email: string,
}

export function UserDetails () {
    const {id} = useParams();
    const [userDetail, setUserDetail] = useState<null | userDetail>(null);
    
    useEffect(() => {
        fetch(`https://gorest.co.in/public/v2/users/${id}`).then(res => res.json()).then(js => setUserDetail(js))
    }, [])
    console.log(userDetail)
    if (userDetail === null) {
        return (
            <div className={styles.load}>
                <Loader size='m'/>
            </div>
        )
    }
    return (
        <div>
            <div className={styles.back}>
                <Link to='/users'><Button label='Назад'/></Link>
            </div>
            <div className={styles.infoUser}>
                <IconDiamond view="link"/>
                <h1>Name: {userDetail.name}</h1>
                <p>Email: {userDetail.email}</p>
                <p>Gender: {userDetail.gender}</p>
            </div>
        </div>
    )
}