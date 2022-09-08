import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<Link href="http://applydash.xyz/?entryPoint=LogoImage&id=63162ca3a40e46896"><h1>Apply BD</h1></Link>
		<nav>
			<Link activeClassName={style.active} href="/blogs">Blogs</Link>
			<Link activeClassName={style.active} href="/contact">Contact me</Link>
		</nav>
	</header>
);

export default Header;
