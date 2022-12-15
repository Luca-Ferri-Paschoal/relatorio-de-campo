import { ReactComponent as LogoTipo } from 'assets/imgs/logoTipo.svg';
import style from './Logo.module.scss';

const Logo = () => {
    return (
        <div className={style.logo}>
            <LogoTipo className={style.logo__logoType}/>
            <h1 className={style.logo__title}>Relatório</h1>
        </div>
    );
}
 
export default Logo;
