import {
    IRelation,
    relation0,
    attrs,
    IRelationAttr
} from 'interfaces/IRelation';
import {
    createContext,
    useState,
    useContext,
    useEffect,
} from 'react';
import DataRelations from 'data/Relations';

interface Value {
    relations: IRelation[],
    setRelations: React.Dispatch<React.SetStateAction<IRelation[]>>
    relationTotal: IRelation;
    setRelationTotal: React.Dispatch<React.SetStateAction<IRelation>>
    newRelation: IRelation;
    setNewRelation: React.Dispatch<React.SetStateAction<IRelation>>
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

    const [
        newRelation,
        setNewRelation
    ] = useState<IRelation>(relation0);

    return (
        <RelationContext.Provider
            value={{
                relations,
                setRelations,
                relationTotal,
                setRelationTotal,
                newRelation,
                setNewRelation,
            }}
        >
            {props.children}
        </RelationContext.Provider>
    );
}

export const useRelationContext = () => {
    const {
        relations,
        relationTotal,
        setRelationTotal,
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
        , [relations]
    );

    return {
        relations,
        relationTotal,
    }
}

export const useCreatingNewRelation = (
    attr: IRelationAttr
) => {
    const {
        newRelation,
        setNewRelation,
    } = useContext(RelationContext) as Value;

    const newRelationAttr = newRelation[attr];

    const editNewRelation = (attr: IRelationAttr, value: number) => {
        setNewRelation(olderRelation => {
            const newRelation = { ...olderRelation };

            if (value === 1 || (value === -1 && newRelation[attr] >= 1)) {
                newRelation[attr] += value;
            }

            return newRelation;
        });
    };

    const add = () => editNewRelation(attr, 1);

    const remove = () => editNewRelation(attr, -1);

    return {
        newRelationAttr,
        add,
        remove,
    }
}

export const useAddingNewRelation = () => {
    const {
        setRelations,
        newRelation,
        setNewRelation
    } = useContext(RelationContext) as Value;

    const addRelation = () => {
        setRelations(
            relations => [...relations, newRelation]
        );

        setNewRelation({ ...relation0 });
    };

    return {
        addRelation
    }
}
