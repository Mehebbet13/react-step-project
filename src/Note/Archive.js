import React, {Component} from 'react';
import style from './note.module.css'
import NoteCard from "./NoteCard";

class Archive extends Component {
    componentDidMount() {
        this.props.fetchData();
        this.props.handleArchive();
    }
    render() {
        return (
            <>
                <div className={style.container}>
                    {this.props.archivedNotes.map(note => (

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

export default Archive;