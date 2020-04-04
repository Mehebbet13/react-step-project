import React, {Component} from 'react';
import style from "./note.module.css";
import NoteCard from "./NoteCard";

class Actual extends Component {
    componentDidMount() {
        this.props.fetchData();
        this.props.handleDraft();
    }
    render() {
        return (
            <>
                <div className={style.container}>
                    {this.props.draftNotes.map(note => (

                        <NoteCard openNote={this.props.openNote}
                                  id={note.id}
                                  title={note.title}
                                  text={note.text}
                                  key={note.id}
                                  color={note.color}
                        />


                    ))} </div>
            </>
        );
    }
}

export default Actual;