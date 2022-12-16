import { useRelationContext } from 'common/context/RelationContext';
import Relation from 'components/Relation';
import style from './Relations.module.scss';

const Relations = () => {
    const {
        relations
    } = useRelationContext();

    return (
        <section
            className={style.relations}
        >
            {relations.map(relation => 
                <div
                    className={style.relations__relation}
                    key={relation.id}
                >
                    <Relation
                        { ...relation }
                    />    
                </div>
            )}
        </section>
    );
}
 
export default Relations;
