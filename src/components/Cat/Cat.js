import css from './cat.module.css'
const Cat = ({cat,dispatch}) => {
    const {name} = cat;

    return (
        <div className={css.block}>
            Cat name: {name}
            <button className={css.btn} onClick={()=>dispatch({type:'deleteCat'})}>delete</button>
        </div>
    );
};

export {Cat};