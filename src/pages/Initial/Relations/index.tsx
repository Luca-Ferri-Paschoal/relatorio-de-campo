import { useRelationContext } from 'common/context/RelationContext';
import Relation from 'components/Relation';

const Relations = () => {
    const {
        relations
    } = useRelationContext();

    return (
        <section>
            {relations.map(relation => 
                <Relation
                    key={relation.id}
                    { ...relation }
                />    
            )}
        </section>
    );
}
 
export default Relations;
