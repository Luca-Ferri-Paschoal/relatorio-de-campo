import { useAddingNewRelation } from 'common/context/RelationContext';
import { GoCheck } from 'react-icons/go';
import style from './ButtonAdd.module.scss';
import { memo } from 'react';

const ButtonAdd = () => {
    const {
        addRelation
    } = useAddingNewRelation();
    
    return (
        <button
            onClick={addRelation}
            className={style.buttonAdd}
        >
            Relatar
            <GoCheck
                className={style.buttonAdd__icon}
            />
        </button>
    );
}

export default memo(ButtonAdd);
