

export function getPosts (page: number, cntItms: number) {
    const promise = fetch(`https://gorest.co.in/public/v2/posts?page=${page}&per_page=${cntItms}`).then(res => res.json());
    return promise;
}
export function getUsers (page: number, cntItms: number) {
    const promise = fetch(`https://gorest.co.in/public/v2/users?page=${page}&per_page=${cntItms}`).then(res => res.json());
    return promise;
}
export function getPostComments (id: string | undefined) {
    const promise = fetch(`https://gorest.co.in/public/v2/posts/${id}/comments`).then(res => res.json());
    return promise;
}
export function getUserDetails (id: string | undefined) {
    const promise = fetch(`https://gorest.co.in/public/v2/users/${id}`).then(res => res.json());
    return promise;
}