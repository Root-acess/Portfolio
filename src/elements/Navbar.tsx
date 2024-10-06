
import './Navbar.css'

const Navbar = () => {
  return (
  
<nav>
    <div className="logo">@Root-acess</div>
    <input type="checkbox" id="nav-toggle" className="nav-toggle" />
    <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
        <span></span>
        <span></span>
    </label>
    <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

  )
}

export default Navbar