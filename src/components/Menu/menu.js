import MenuItem from "../Menuitem/menu-item"
import "./menu.css"

function Menu() {
    return ( <header className="menu-wrapper">
        <nav>
            <ul className="menu">
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