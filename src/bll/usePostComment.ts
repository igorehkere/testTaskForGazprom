import { useState, useEffect } from "react";
import { getPostComments } from "../dal/api";

type commentPost = {
    id: number,
    post_id: number,
    name: string,
    email: string,
    body: string,
}

export function usePostComment (id: string | undefined) {
    const [postDetail, setPostDetail] = useState<null | Array<commentPost>>(null);
    useEffect(() => {
        getPostComments(id).then(js => setPostDetail(js));
    }, [])
    return {postDetail}
}