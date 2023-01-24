import {Coment} from "../Comment/Coment";

const Comments = ({users}) => {

    return (
        <div className="cont">
            {users.map(user => <Coment key = {user.id} user = {user}/>)}
        </div>
    );
};

export {
    Comments
}