import { useState, useEffect } from "react";
import { getUserDetails } from "../dal/api";

type userDetail = {
    name: string,
    id: number,
    gender: string,
    email: string,
}

export function useUserDetails (id: string | undefined) {
    const [userDetail, setUserDetail] = useState<null | userDetail>(null);
        
    useEffect(() => {
        getUserDetails(id).then(js => setUserDetail(js))
    }, [])
    return { userDetail }
}