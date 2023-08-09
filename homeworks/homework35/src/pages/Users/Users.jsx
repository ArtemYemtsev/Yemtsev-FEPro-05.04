import { NavLink, useLoaderData, useNavigation } from "react-router-dom"
import { ROUTES } from "../../constants/routerPath";

export const Users = () => {
    const { users } = useLoaderData();
    const { state } = useNavigation();
    return (
        <>
            {state === 'loading'
                ?
                <p className="loader">Loading...</p>
                :
                <>
                    <h2 className="page__title">Users</h2>
                    <ul className="users">
                        {users.map(user =>
                            <li key={user.id} className="user">
                                <div className="user-info">
                                    <p>{user.name}</p>
                                    <p>{user.phone}</p>
                                    <NavLink to={ROUTES.albums(user.id)} className="button">Albums</NavLink>
                                </div>
                            </li>
                        )}
                    </ul>
                </>
            }
        </> 
    )
}