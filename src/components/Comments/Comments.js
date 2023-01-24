import {Comment} from "../Comment/Comment";

const Comments = ({comments}) => {

    return (
        <div className="cont">
            {comments.map(comment => <Comment key = {comment.id} comment = {comment}/>)}
        </div>
    );
};

export {
    Comments
}