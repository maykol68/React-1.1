import MenuItem from "../Menuitem/menu-item"


function Menu() {
    return (
    <header className="App-header">
        <nav>
            <ul>
                <MenuItem
                    text="Inicio"
                    link="/"
                />
                <MenuItem
                    text="Personajes"
                    link="/Personajes"
                />
                <MenuItem
                    text="Episodios"
                    link="/episodios"
                />
                <MenuItem
                    text="Citas"
                    link="/citas"
                />
            </ul>
        </nav>
    </header>
  )
}

export default Menu