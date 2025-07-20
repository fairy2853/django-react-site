import { useState, useEffect , useCallback} from "react"
import api from "../api"
import Note from "../components/Note"
import NoteForm from "../components/NoteForm"
import "../styles/Home.css"
import MessageList from "../components/MessageList"

function Home() {

    const [messages , setMessages] = useState([]);
    const [notes, setNotes] = useState([]);

    
    console.count('main')

    useEffect(() => {
        getNotes();
    }, [])

    const addMessage = (content) =>{
        const id = Date.now()
        const newMessage = {
            id: id,
            content : content
        }
        setMessages((prev) => [...prev, newMessage])

        
      
    }

    const removeMessage = useCallback((id) => {
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
      }, []);

    const getNotes = () => {
        api.get("/api/notes/")
            .then((res) => res.data)
            .then((data) => setNotes(data))
            .catch((err) => alert(err));
    }

    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}/`).then((res) => {
            if (res.status === 204) addMessage("note has been deleted")
            else addMessage("Failed to delete note")
            getNotes()
        }).catch((error) => alert(error))
    };

    const createNote = (e , content , title) => {
        e.preventDefault();
        api.post("/api/notes/", { content, title }).then((res) => {
            if (res.status === 201) addMessage('Post was created')
            else addMessage('Post was not created')
            getNotes()
        }).catch((err) => { alert(err) });
        
    }



    return <div className="main-block">
        <div>
            <h2>Notes</h2>
            <div className="noteList">
            {
                notes.map( note => {
                    return <Note note={note} onDelete={deleteNote}  key={note.id}/>
                })
            }
            </div>
        </div>
        <NoteForm onSubmit={createNote}/>


        <MessageList messages={messages} removeMessage={removeMessage} />
    </div>
}

export default Home