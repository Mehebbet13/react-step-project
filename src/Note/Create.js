import React, {Component} from 'react';
import style from './note.module.css'

class Create extends Component {
    state = {
        title: "",
        text: '',
        id: JSON.stringify(Math.floor(Math.random() * Math.floor(10000))),
        isColorChosen: false,
        isCompletedBool: false
    };
    generateColor = () => {
        return '#' + Math.random().toString(16).substr(-6);
    };
   async handleNote (e) {
        let result = await fetch("http://localhost:3000/notes", {
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.id,
                title: this.state.title,
                text: this.state.text,
                color: this.state.isColorChosen ? this.props.color : this.generateColor(),
                isCompleted: this.state.isCompletedBool ? "true" : "false"
            })

        });
        this.setState({isCompletedBool: true});
        this.setState({title: ""});
        this.setState({text: ""});
    };

    async createNote(e) {
        e.preventDefault();
        let result = await fetch("http://localhost:3000/notes", {
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.id,
                title: this.state.title,
                text: this.state.text,
                color: this.state.isColorChosen ? this.props.color : this.generateColor(),
                isCompleted: this.state.isCompletedBool ? "true" : "false"
            })

        });
        this.setState({title: ""});
        this.setState({text: ""});

    };

    // changeColor1 = (e) => {
    //     e.preventDefault();
    //     this.setState({color: style.color1});
    //     this.setState({isColorChosen: true});
    // };
    // changeColor2 = (e) => {
    //     e.preventDefault();
    //     this.setState({color: style.color2});
    //     this.setState({isColorChosen: true});
    // };
    // changeColor3 = (e) => {
    //     e.preventDefault();
    //     this.setState({color: style.color3});
    //     this.setState({isColorChosen: true});
    // };
    // changeColor4 = (e) => {
    //     e.preventDefault();
    //     this.setState({color: style.color4});
    //     this.setState({isColorChosen: true});
    // };

    render() {
        return (
            <div className={style.create}>
                <form onMouseLeave={(e) => this.createNote(e)}>
                    <h1>Fill data</h1>
                    <input className={style.title}
                           type="text"
                           placeholder={'Title'}
                           value={this.state.title}
                           onChange={(e) => this.setState({title: e.target.value})}
                    />
                    <input
                        className={style.text}
                        type="text"
                        placeholder={'Note text '}
                        value={this.state.text}
                        onChange={(e) => this.setState({text: e.target.value})}

                    />
                    <label>Color:</label>
                    <input className={[style.colorButton, style.color1].join(' ')} type="submit" value={''}
                           onClick={(e) => this.props.changeColor1(e)}/>
                    <input className={[style.colorButton, style.color2].join(' ')} type="submit" value={''}
                           onClick={(e) => this.props.changeColor2(e)}/>
                    <input className={[style.colorButton, style.color3].join(' ')} type="submit" value={''}
                           onClick={(e) => this.props.changeColor3(e)}/>
                    <input className={[style.colorButton, style.color4].join(' ')} type="submit" value={''}
                           onClick={(e) => this.props.changeColor4(e)}/>
                    <button className={style.button} type={'submit'}
                            onClick={(e) => this.handleNote(e)}> Create a note
                    </button>
                </form>
            </div>
        );
    }
}

export default Create;