

const Note = ({ note, onDelete }) => {

    return <div  className="note">
        <div className="content-block">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
        </div>
        <div className="btn-block">
            <button className="btn" onClick={() => { onDelete(note.id) }}>Delete</button>
        </div>
    </div>

}

export default Note