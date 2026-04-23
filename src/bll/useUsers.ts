import { useState, useEffect } from "react";
import { getUsers } from "../dal/api";

type user = {
    name: string,
    email: string,
    id: number,
    gender: string,
    status: string,
}

export function useUsers (page:number, cntItms:number) {
    const [users, setUsers] = useState<null | Array<user>>(null);
    useEffect(() => {
        setUsers(null);
        getUsers(page, cntItms).then(js => setUsers(js));
    }, [page, cntItms])
    return { users }
}