import { IRelation } from 'interfaces/IRelation';
import style from './Relation.module.scss';

const Relation = ({
    hrs,
    pub,
    rv,
    vid,
    bs
}: IRelation) => { 
    return (
        <section
            className={style.relation}
        >
            <div
                className={style.relation__hrs}
            >
                <span>Horas: {hrs}h</span>
            </div>
            <div
                className={style.relation__statistics}
            >
                <div>
                    <span>Publicaçoes: {pub}</span>
                </div>
                <div>
                    <span>Revisitas: {rv}</span>
                </div>
                <div>
                    <span>Vídeos: {vid}</span>
                </div>
                <div>
                    <span>Estudos: {bs}</span>
                </div>
            </div>
        </section>
    );
}
 
export default Relation;
