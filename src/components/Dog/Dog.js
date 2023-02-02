import css from './dog.module.css'
const Dog = ({dog,dispatch}) => {
    const {name} = dog;

    return (
        <div className={css.block}>
            Dog name: {name}
            <button className={css.btn} onClick={()=>dispatch({type:'deleteDog'})}>delete</button>
        </div>
    );
};

export {Dog};