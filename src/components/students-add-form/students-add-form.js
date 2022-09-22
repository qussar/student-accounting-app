import { Component } from 'react';

import './students-add-form.css';

class StudentsAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            stipend: ''
        }
    }


    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.stipend) return;
        this.props.onAdd(this.state.name, this.state.stipend);
        this.setState({
            name: '',
            stipend: ''
        })
    }


    render() {
        const { name, stipend } = this.state;


        return (
            <div className="app-add-form" >
                <h3>Добавьте нового студента</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Стипендия в $?"
                        name="stipend"
                        value={stipend}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default StudentsAddForm;