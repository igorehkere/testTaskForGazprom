import { Loader } from '@consta/uikit/Loader';
import styles from './PostPage.module.css'
import { useNavigate } from "react-router-dom";
import { usePosts } from "../bll/usePosts";

type props = {
    page: number,
    cntItms: number,
}

export function PostsList ({ page, cntItms }: props) {
    
    const navigate = useNavigate();
    const {posts} = usePosts(page, cntItms);

    
    if (posts === null) {
        return (
            <div className={styles.load}>
                <Loader size='m'/>
            </div>
        )
    }
    if (posts.length === 0) {
        return (
            <div className={styles.load}>
                <h1>Список постов пуст</h1>
            </div>
        )
    }
    return (
        <div className={styles.postList}>
            <table className={styles.postTable}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Заголовок</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => {
                        return (
                            <tr key={post.id} onClick={() => navigate(`/posts/${post.id}`)}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}