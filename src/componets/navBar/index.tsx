import "./style.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/createproduct" className="nav-link">
            Cadastrar Produto
          </a>
        </li>
        <li className="nav-item">
          <a href="/categoria" className="nav-link">
            Categoria
          </a>
        </li>
      </ul>
    </nav>
  );
}
