import react, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper } from './style';

class Header extends PureComponent {
	render() {
		return (
			<HeaderWrapper>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
				  <div className="container-fluid">
				    <Link to='/'>
				    	<p className="navbar-brand">Navbar</p>
				    </Link>
				    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				      <span className="navbar-toggler-icon"></span>
				    </button>
				    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				      <div className="navbar-nav">
				        <Link to='/'>
				        	<p className="nav-link active" aria-current="page">Home</p>
				        </Link>
				        <Link to='/detail/1'>
				        	<p className="nav-link">Detail-page1</p>
				        </Link>
				        <Link to='/404'>
				        	<p className="nav-link">404</p>
				      	</Link>
				      </div>
				    </div>
				  </div>
				</nav>
			</HeaderWrapper>
		)
	}
}

export default Header;