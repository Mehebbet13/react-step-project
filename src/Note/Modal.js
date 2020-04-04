import React, {Component} from 'react';
import style from './note.module.css'
import {Link} from "react-router-dom";

class Modal extends Component {
    render() {
        return (
            <div className={style.modalContainer}>
                <div className={style.modal}>
                    <div className={style.modalHeader}><p> Want to delete this note?</p></div>
                    <button className={style.cancel}
                            onClick={this.props.closeModal}>CANCEL
                    </button>

                    <Link to={'/'} >
                    <button className={style.ok}
                            onClick={this.props.deleteNote}
                    >OK
                    </button>
                    </Link>
                </div>
            </div>

        );
    }
}

export default Modal;