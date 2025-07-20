import { useState } from "react";

const NoteForm = ({ onSubmit }) => {

    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    return <form onSubmit={(e) => {onSubmit( e , content , title)}} className="form-container">
        <h3>Create a Note</h3>
        <h4>Title</h4>
        
        <input
            className="form-input"
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
        ></input>
        <h4>Content</h4>
        
        <textarea
            className="form-input"
            id="content"
            name="content"
            required
            value={content}
            onChange={(e) => { setContent(e.target.value) }}
        ></textarea>

        <input type="submit" value="Submit" className="form-button"></input>
    </form>
}

export default NoteForm;