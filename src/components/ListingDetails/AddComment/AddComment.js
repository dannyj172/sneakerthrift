import { useForm } from "../../../hooks/useForm";

export const AddComment = ({
    onCommentSubmit
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);

    return (
        <div className="create-comment">
            <form className="form" onSubmit={onSubmit}>
                <textarea name="comment" className="comment-area" placeholder="Add a comment..." value={values.comment} onChange={changeHandler}></textarea>
                <div className="button-div">
                    <input className="comment-button" type="submit" value="Add Comment" />
                </div>
            </form>
        </div>
    )
}