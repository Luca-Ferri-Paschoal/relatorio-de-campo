import { useCreatingNewRelation } from 'common/context/RelationContext';
import { IRelationAttr } from 'interfaces/IRelation';
import {
    AiOutlinePlusCircle,
    AiOutlineMinusCircle
} from 'react-icons/ai';
import style from './Counter.module.scss';
import { memo } from 'react';

interface props {
    name: string;
    attr: IRelationAttr;
}

const Counter = ({
    name,
    attr,
}: props) => {
    const {
        newRelationAttr,
        add,
        remove,
    } = useCreatingNewRelation(attr);



    return (
        <div className={style.counter}>
            <div className={style.counter__alignRight}>
                <button
                    onClick={() => remove()}
                >
                    <AiOutlineMinusCircle
                        className={
                            `${style.counter__buttonIcon}
                            ${style.minusCircle}`
                        }
                    />
                </button>
                <h3>{name}</h3>
            </div>
            <div className={style.counter__alignLeft}>
                <span>{newRelationAttr}</span>
                <button
                    onClick={() => add()}
                >
                    <AiOutlinePlusCircle
                        className={
                            `${style.counter__buttonIcon}
                            ${style.plusCircle}`
                        }
                    />
                </button>
            </div>
        </div>
    );
}

export default memo(Counter);
