import { IRelation } from 'interfaces/IRelation';
import { memo } from 'react';
import style from './Relation.module.scss';

const Relation = ({
    hrs,
    pub,
    rv,
    vid,
    bs
}: IRelation) => { 
    return (
        <div
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
        </div>
    );
}
 
export default memo(Relation);
