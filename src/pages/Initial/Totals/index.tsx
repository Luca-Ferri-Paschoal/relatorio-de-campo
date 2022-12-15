import { useRelationContext } from 'common/context/RelationContext';
import Relation from 'components/Relation';
import style from './Totals.module.scss';

const Totals = () => {
    const {
        relationTotal,
    } = useRelationContext();
    
    return (
        <section
            className={style.totals}
        >
            <Relation
                { ...relationTotal }
            />
        </section>
    );
}
 
export default Totals;
