import style from './Header.module.scss';
import Logo from 'components/Logo';

const Header = () => {
    return (
        <header
            className={style.Header}
        >
            <Logo/>
        </header>
    );
}
 
export default Header;
