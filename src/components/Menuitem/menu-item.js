import "./menu-item.css"

function MenuItem(props) {
    return (
        <li className="manu-item">
            <a href={props.link}>
                    {props.text}
            </a>
        </li>
    )
}

export default MenuItem