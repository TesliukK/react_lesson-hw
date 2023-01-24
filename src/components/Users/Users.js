import {User} from "../User/User";

const Users = ({users}) => {

    return (
        <div className="cont">
            {users.map(user => <User key = {user.id} user = {user}/>)}
        </div>
    );
};

export {
    Users
}