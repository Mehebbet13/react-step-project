import React, {Component} from 'react';
import Archive from "./Archive";
import Actual from "./Actual";
import Navbar from "./Navbar";
import Create from "./Create";
import {Route} from "react-router-dom";
import Note from "./Note";
import AllNotes from "./AllNotes";

class MainPage extends Component {
    render() {
        return (
            <>
                <Navbar handleArchive={this.props.handleArchive}
                        handleDraft={this.props.handleDraft}

                />

                <Route path={'/create'}>
                    < Create
                    />
                </Route>
                <Route path={'/actual'}>
                    <Actual
                        draftNotes={this.props.draftNotes}
                        openNote={this.props.openNote}
                        selectedNote={this.props.selectedNote}
                        id={this.props.id}
                        fetchData={this.props.fetchData}
                        handleDraft={this.props.handleDraft}
                    />
                </Route>
                <Route  path={'/archive'}>
                    <Archive
                        fetchData={this.props.fetchData}
                        archivedNotes={this.props.archivedNotes}
                        openNote={this.props.openNote}
                        selectedNote={this.props.selectedNote}
                        id={this.props.id}
                        handleArchive={this.props.handleArchive}
                    />
                </Route>
                <Route  path={`/note/${this.props.id}`}>
                    <Note selectedNote={this.props.selectedNote}
                          handleArchive={this.props.archivedNotes}
                          fetchData={this.props.fetchData}

                    />
                </Route>
                <Route exact path={`/`}>
                    <AllNotes
                        fetchData={this.props.fetchData}
                        notes={this.props.notes}
                        openNote={this.props.openNote}
                        selectedNote={this.props.selectedNote}
                        id={this.props.id}
                    />
                </Route>
            </>
        );
    }
}

export default MainPage;