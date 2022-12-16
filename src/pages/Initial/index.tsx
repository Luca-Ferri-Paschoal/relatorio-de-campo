import AddRelation from 'pages/AddRelation';
import Relations from './Relations';
import Totals from './Totals';
import style from './Initial.module.scss';

const Initial = () => {
    return (
        <section className={style.initial}>
            <main className={style.initial__relation}>
                <Totals/>
                <Relations/>
            </main>
            <aside className={style.initial__addRelation}>
                <AddRelation/>
            </aside>
        </section>
    );
}
 
export default Initial;
