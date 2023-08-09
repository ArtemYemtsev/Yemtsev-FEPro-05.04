import { NavLink, useLoaderData, useNavigation } from "react-router-dom"
import { ROUTES } from "../../constants/routerPath";

export const Posts = () => {
    const { posts } = useLoaderData();
    const { state } = useNavigation();
    return (
        <>
            {state === 'loading'
                ?
                <p className="loader">Loading...</p>
                :
                <>
                    <h2 className="page__title">Posts</h2>
                    <div className="posts">
                        {posts.map(post => 
                            <NavLink key={ post.id } to={ROUTES.post(post.id)} className="posts__item">
                                <span className="post-id">post id: {post.id}</span>
                                <h3>{ post.title }</h3>
                                <p>{ post.body }</p>
                            </NavLink>
                            )}
                    </div>
                </>
            }
        </>
)}