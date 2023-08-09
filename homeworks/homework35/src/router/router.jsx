import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from '../constants/routerPath';
import { Posts } from '../pages/Posts';
import { Post } from '../pages/Post';
import { Root } from '../pages/Root';
import { Users } from '../pages/Users';
import { getUsers } from "../services/getUsers";
import { getPosts } from "../services/getPosts";
import { getPostById } from "../services/getPostById";
import { ErrorPage } from "../pages/ErrorPage";
import { Album } from "../pages/Album";
import { getAlbumByUser } from "../services/getAlbumByUser";
import { Photos } from "../pages/Photos";
import { getPhotosById } from "../services/getPhotosById";

export const router = createBrowserRouter([
    {
        path: ROUTES.root,
        element: <Root />,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Users />,
                loader: getUsers
            },
            {
                path: ROUTES.posts,
                element: <Posts />,
                loader: getPosts
            },
            {
                path: ROUTES.post(),
                element: <Post />,
                loader: getPostById
            },
            {
                path: ROUTES.albums(),
                element: <Album />,
                loader: getAlbumByUser
            },
            {
                path: ROUTES.photos(),
                element: <Photos/>,
                loader: getPhotosById
            }
        ]
    }
]);