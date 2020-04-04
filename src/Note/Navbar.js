import React, {Component} from 'react';
import style from './note.module.css'
import {Link} from "react-router-dom";
import img from './logo.jpg'
class Navbar extends Component {
    render() {
        return (
            <div className={style.nav}>
                <div className={style.logo}>
                    <img src={img} alt=""/>
                   <span> <Link to={'/'}>Notes App</Link> </span>
                </div>
                <div className={style.links}>
                    <Link to={'/actual'}
                          // onClick={this.props.handleDraft}
                    >Actual </Link>
                    <Link to={'/archive'}
                          // onClick={this.props.handleArchive}
                    >Archive </Link>
                    <Link to={'/create'}>Create </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;