import React from 'react';
import style from "./note.module.css";
import {Link} from "react-router-dom";

const NoteCard = ({title, text, openNote, id,color}) => {
    return (
        <Link to={`/note/${id}`}>
            <div className={[style.sheet , color].join(' ')} style={{backgroundColor:color}} onClick={openNote} id={id}>
                <div className={style.sheetHeader}>{title}</div>
                <div className={style.sheetBody}>
                    <p>{text}</p>
                </div>
            </div>
        </Link>
    );

}

export default NoteCard;