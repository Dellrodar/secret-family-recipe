import React from 'react';
import { useHistory } from 'react-router-dom';

function Header(props) {
	const { isAuth, setAuth, setUser } = props;
	const history = useHistory();
	const publicUrl = process.env.PUBLIC_URL;
	const logout = (e) => {
		e.preventDefault();
		setAuth(null);
		setUser({});
		localStorage.removeItem('token');
		window.location.reload(false);
		history.push(`${publicUrl}`);
	};

	const goToPage = (page) => history.push(`${publicUrl}/${page}`);

	return (
		<div className='nav-bar'>
			{isAuth ? (
				<>
					<section className='private-nav'>
						<h2>Welcome to Secret Family Recipes</h2>
						<div className='links'>
						<button type='button' onClick={() => goToPage('recipes-home')}>
							All Recipes
						</button>
						<button type='button' onClick={() => goToPage('add-recipe')}>
							Add a recipe
						</button>
						<button type='submit' onClick={logout}>
							Log Out
						</button>
					</div>
					</section>
				</>
			) : (
				<section className='public-nav'>
					<h2>Welcome to Secret Family Recipes</h2>
				</section>
			)}
		</div>
	);
}
export default Header;
