import { useRelationContext } from 'common/context/RelationContext';
import style from './Totals.module.scss';

const Totals = () => {
    const {
        relationTotal,
    } = useRelationContext();
    
    return (
        <section
            className={style.totals}
        >
            <div
                className={style.totals__hrs}
            >
                <span>Horas: {relationTotal.hrs}h</span>
            </div>
            <div
                className={style.totals__statistics}
            >
                <div>
                    <span>Publicaçoes: {relationTotal.pub}</span>
                </div>
                <div>
                    <span>Revisitas: {relationTotal.rv}</span>
                </div>
                <div>
                    <span>Vídeos: {relationTotal.vid}</span>
                </div>
                <div>
                    <span>Estudos: {relationTotal.bs}</span>
                </div>
            </div>
        </section>
    );
}
 
export default Totals;
