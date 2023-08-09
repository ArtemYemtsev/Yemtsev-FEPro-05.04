import { useLoaderData, useNavigation } from "react-router-dom"

export const Post = () => {
    const { post } = useLoaderData();
    const { state } = useNavigation();
    return (
        <>
            {state === 'loading'
                ?
                <p className="loader">Loading...</p>
                :
                <>
                    <div className="post">
                        <h2>{ post.title }</h2>
                        <p>{ post.body }</p>
                    </div>
                </>
            }
        </>  
    )
}