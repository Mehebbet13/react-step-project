import React, {Component} from 'react';
import style from './note.module.css'
import Modal from "./Modal";

class Note extends Component {
    constructor(props) {
        super(props);
    this.state = {
        showModal: false,
        id: this.props.selectedNote[0].id,
        note: [],
        title:this.props.selectedNote[0].title,
        text:this.props.selectedNote[0].text,
        isDisabled:true,
        save:false,
        isCompletedBool:true
    };
    }
    componentDidMount() {
        this.props.fetchData();
    }
    deleteNote = (e) => {
        fetch(`http://localhost:3000/notes/${this.state.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        });
        this.setState({showModal: false})
        this.state.note.remove();
    };
    handleModal = (e) => {
        this.setState({showModal: true});
        this.setState({note: e.target.parentElement})

    };
    closeModal = () => {
        this.setState({showModal: false})
    };

     handleArchive=(id,title,text)=>{
        this.setState({isCompletedBool:false});

      fetch(`http://localhost:3000/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                text: text,
                isCompleted: this.state.isCompletedBool ? "true" : "false"
            })

        });
    };
    edit=()=>{
this.setState({isDisabled:false});
this.setState({save:!this.state.save});
    };
    async save(e,id,title,text){
            e.preventDefault();

           await fetch(`http://localhost:3000/notes/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    text: text,
                    isCompleted: this.state.isCompletedBool ? "true" : "false"
                })

            });
        this.setState({isDisabled:true});
        this.setState({save:!this.state.save});

    };
    render() {
        return (
            this.props.selectedNote[0] ?
                this.state.showModal ?
                    <Modal
                        closeModal={this.closeModal}
                        deleteNote={this.deleteNote}
                    /> :
                    <div className={style.noteContainer}>
                        <div className={style.note}>
                            <div className={style.textContainer}>
                                <input className={style.noteTitle}
                                       disabled={this.state.isDisabled}
                                       defaultValue={this.state.title}
                                       onChange={(e)=>this.setState({title:e.target.value})}
                                       type="text"/>
                                <textarea disabled={this.state.isDisabled}
                                          className={style.noteText}
                                          defaultValue={this.state.text}
                                          readOnly={false}
                                          onChange={(e)=>this.setState({text:e.target.value})}
                                />
                            </div>
                            <input className={style.btn} type={'submit'}
                                   onClick={this.state.save?(e)=>this.save(e,this.state.id,this.state.title,this.state.text):
                                       this.edit}
                                   value={this.state.save?"SAVE":"EDIT"}/>
                            <button  onClick={()=>this.handleArchive(this.state.id,this.state.title,this.state.text)}
                                >ARCHIVE</button>
                            <button onClick={this.handleModal}>DELETE</button>
                        </div>

                    </div>
                : 'loading'

        );
    }
}

export default Note;