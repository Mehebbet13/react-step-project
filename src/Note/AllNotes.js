import React, {Component} from 'react';
import style from "./note.module.css";
import NoteCard from "./NoteCard";

class AllNotes extends Component {
componentDidMount() {
    this.props.fetchData();
}

    render() {
        return (
            <>
                <div className={style.container}>
                    {this.props.notes.map(note => (

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

export default AllNotes;