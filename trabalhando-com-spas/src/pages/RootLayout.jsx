import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
    return (
        <>
            <Header />
            <main>
                <p>Esse é o layout principal. Abaixo esta o conteudo dinamico de cada rota </p>
                <hr />
                <Outlet />
                <hr />
            </main>
            <footer>
                <p>Feito com React Router DOM</p>
            </footer>
        </>
    )
}