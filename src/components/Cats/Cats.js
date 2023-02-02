import {Cat} from "../Cat/Cat";

const Cats = ({cats,dispatch}) => {
    return (
        <div>
            {cats.map(cat=><Cat cat={cat} dispatch={dispatch}/>)}
        </div>
    );
};

export {Cats};