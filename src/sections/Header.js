import Navigation from "./Navigation";

function Header() {
    return <header>
        <Navigation />

        <div className="header-box">
            <h1 className="header-text">Hy! I am<br />Marwan Zaky</h1>
            <p className="header-parag">
                Passion and Hobbyist game developer with +7 years of experience making<br />iOS/Android highly
                professional games, 2d and
                3d from scratch.
            </p>

            <button className="btn btn-full">Email me</button>
            <button className="btn btn-ghost">About me</button>
        </div>
    </header>
}

export default Header;