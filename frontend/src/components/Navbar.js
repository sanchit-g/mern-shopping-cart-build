import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar__logo'>
				<h2>MERN Shopping Cart</h2>
			</div>

			<ul className='navbar__links'></ul>
		</nav>
	);
};

export default Navbar;
