import React, {Component} from 'react';
import MainPage from "./Note/MainPage";
import style from "./Note/note.module.css";

class App extends Component {
  state = {
    notes: [],
    selectedNote: [],
    id: 0,
    archivedNotes: [],
    draftNotes: [],
    color: '',
    selectedNoteColor:''
  };
  openNote = (e) => {
    let selectedNote = this.state.notes.filter(note => note.id === e.currentTarget.getAttribute('id'));
    this.setState({selectedNote: selectedNote});
    this.setState({selectedNoteColor: selectedNote[0].color});
    this.setState({id: selectedNote[0].id});
    console.log(this.state.selectedNoteColor);
  };
  archivedNotes = (e) => {
    let archivedNotes = this.state.notes.filter(note => note.isCompleted === "true");
    this.setState({archivedNotes: archivedNotes});
    this.fetchData();
    console.log("arxived notes")
  };
  draftNotes = (e) => {
    let draftNotes = this.state.notes.filter(note => note.isCompleted === "false");
    this.setState({draftNotes: draftNotes});
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state)
    console.log(prevState)
  }

  fetchData=()=>{
    fetch("http://localhost:3000/notes")
        .then(r => r.json())
        .then(data => this.setState({notes: data}))
        .catch(err => console.log(err));
    console.log("fetching data");
  };
  componentDidMount = () => {
    this.fetchData();

  };
  changeColor1 = (e) => {
    e.preventDefault();
    this.setState({color: style.color1});
    this.setState({isColorChosen: true});
  };
  changeColor2 = (e) => {
    e.preventDefault();
    this.setState({color: style.color2});
    this.setState({isColorChosen: true});
  };
  changeColor3 = (e) => {
    e.preventDefault();
    this.setState({color: style.color3});
    this.setState({isColorChosen: true});
  };
  changeColor4 = (e) => {
    e.preventDefault();
    this.setState({color: style.color4});
    this.setState({isColorChosen: true});
  };

  render() {
    return (
        <>
          <MainPage
              notes={this.state.notes}
              openNote={this.openNote}
              selectedNote={this.state.selectedNote}
              id={this.state.id}
              archivedNotes={this.state.archivedNotes}
              draftNotes={this.state.draftNotes}
              handleArchive={this.archivedNotes}
              handleDraft={this.draftNotes}
              fetchData={this.fetchData}
              changeColor1={this.changeColor1}
              changeColor2={this.changeColor2}
              changeColor3={this.changeColor3}
              changeColor4={this.changeColor4}
              color={this.state.color}
              selectedNoteColor={this.state.selectedNoteColor}
          />
        </>
    );
  }
}

export default App;
