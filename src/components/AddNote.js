import React,{useContext,useState} from 'react'
import NoteContext from '../context/notes/noteContext';


const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title:"",description:"",tag:"default"})

    const handleOnClick = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name] : e.target.value});
    } 

    return (
        <div>
            <h1 className="my-2">Add Note</h1>
            <div className="container">
                <form className="my-2">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                           Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            aria-describedby="emailHelp"
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            onChange={onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleOnClick}>
                        Add Note
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddNote