import { Outlet } from "react-router-dom"
import { Nav } from "../../components/Nav"

export const Root = () => {
    return (
        <main className="wrapper">
            <header className="header">
                <h2>Header</h2>
                <Nav />
            </header>
                <div className="content">
                    <Outlet/>
                </div>
            <footer className="footer">
                <h2>Footer</h2>
            </footer>
        </main>
    )
}