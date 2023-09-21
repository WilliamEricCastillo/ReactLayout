import "./NavBar.css"
function NavBar(props) {
    return (
        <nav>
            <ul>
                {props.links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
export default NavBar;
