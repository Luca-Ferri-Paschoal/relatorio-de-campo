import {
    IRelation,
    relation0,
    attrs
} from 'interfaces/IRelation';
import {
    createContext,
    useState,
    useContext,
    useEffect
} from 'react';
import DataRelations from 'data/Relations';

interface Value {
    relations: IRelation[],
    setRelations: React.Dispatch<React.SetStateAction<IRelation[]>>
    relationTotal: IRelation;
    setRelationTotal: React.Dispatch<React.SetStateAction<IRelation>>
}

export const RelationContext = createContext<Value | null>(null);
RelationContext.displayName = 'Relation';

export const RelationProvider = (props: {
    children: JSX.Element
}) => {
    const [
        relations,
        setRelations,
    ] = useState<IRelation[]>(DataRelations);

    const [
        relationTotal,
        setRelationTotal
    ] = useState<IRelation>(relation0);

    return (
        <RelationContext.Provider
            value={{
                relations,
                setRelations,
                relationTotal,
                setRelationTotal,
            }}
        >
            {props.children}
        </RelationContext.Provider>
    );
}

export const useRelationContext = () => {
    const {
        relations,
        setRelations,
        relationTotal,
        setRelationTotal
    } = useContext(RelationContext) as Value;

    useEffect(() => {
        setRelationTotal((): IRelation => {
            const total: IRelation = relations.reduce(
                (accum, current) => {
                    attrs.forEach(attr => {
                        accum[attr] += current[attr]
                    })

                    return accum;
                }
                , { ...relation0 }
            );

            return total;
        })
    }
        , [relations, setRelationTotal]
    );

    return {
        relations,
        relationTotal
    }
}
