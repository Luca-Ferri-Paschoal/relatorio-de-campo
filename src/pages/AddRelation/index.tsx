import { attrs } from 'interfaces/IRelation';
import uniqid from 'uniqid';
import Counter from './Counter';
import style from './AddRelation.module.scss';
import ButtonAdd from './ButtonAdd';

const names = ['Horas', 'Publicações', 'Vídeos', 'Revisitas', 'Estudos'];
const ids: string[] = [];
names.forEach(() => ids.push(uniqid()));

const AddRelation = () => {
    return (
        <section
            className={style.addRelation}
        >
            <h2
                className={style.addRelation__title}
            >
                Adicione um relatorio
            </h2>
            <div
                className={style.addRelation__form}
            >
                {attrs.map((attr, index) =>
                    <Counter
                        key={ids[index]}
                        name={names[index]}
                        attr={attr}
                    />
                )}
            </div>
            <ButtonAdd/>            
        </section>
    );
}

export default AddRelation;
