import { useState, useEffect } from "react";
import { getPosts } from "../dal/api";

type post = {
    id: number,
    user_id: number,
    title: string,
    body: string,
}

export function usePosts(page: number, cntItms: number) {
    const [posts, setPosts] = useState<null | Array<post>>(null);
    useEffect(() => {
        setPosts(null);
        getPosts(page, cntItms).then(js => setPosts(js));
    }, [page, cntItms])
    return {posts}
}