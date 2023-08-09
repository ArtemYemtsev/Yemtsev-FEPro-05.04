import { useLoaderData, useNavigation, NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routerPath";

export const Album = () => {
    const { albums } = useLoaderData();
    const { state } = useNavigation();
    console.log(albums)

    return (
        <>
            {state === 'loading'
                ?
                <p className="loader">Loading...</p>
                :
                <div className="posts">
                    {albums.map(album => 
                            <div key={ album.id } className="posts__item">
                                <span className="post-id">album id: {album.id}</span>
                                <h3>{ album.title }</h3>
                                <NavLink to={ROUTES.photos(album.id)} className="button">Photos</NavLink>
                            </div>
                            )}
                </div>
            }
        </> 
    )
}