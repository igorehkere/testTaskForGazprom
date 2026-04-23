import { Link } from "react-router-dom";
import { Button } from "@consta/uikit/Button";
import styles from './PostPage.module.css';
import { IconCommentFilled } from '@consta/icons/IconCommentFilled';
import { Loader } from "@consta/uikit/Loader";
import { useParams } from "react-router-dom";
import { usePostComment } from "../bll/usePostComment";

export function PostDetails () {
    
    const {id} = useParams();
    const {postDetail} = usePostComment(id);

    if (postDetail === null) {
        return (
            <div>
                <div className={styles.load}>
                    <Loader size='m'/>
                </div>
            </div>
        )
    }
    return (
        <div>
            <header className={styles.back}>
                <Link to='/posts'><Button label='Назад'/></Link>
            </header>
            <div className={styles.comments}>
                <div className={styles.infoPost}>
                    <h1>Comments {<IconCommentFilled/>}</h1>
                    {postDetail.length === 0 ? <div><h2 style={{textAlign: 'center', marginTop: 30}}>Список коментарией пока пуст...</h2></div> :
                        postDetail.map((comment) => {
                            return (
                                <div key={comment.id} className={styles.comment}>
                                    <div className={styles.titleComment}>
                                        <p>{comment.name}({comment.id})</p>
                                        <p>{comment.email}</p>
                                    </div>
                                    <div className={styles.bodyComment}>
                                        <p>{comment.body}</p>
                                    </div>
                                </div>
                            )
                    })}
                </div>
            </div>
        </div>
    )
}