import React from 'react';
import { connect } from 'react-redux';
import { addPrisoner } from '../states/actions/actionCreators';

class PrisonerForm extends React.Component {
    state = {
        name: '',
        location: '',
        skills: [{
            skill: ''
        }]
    }
    
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler() {
        if (this.state.name && this.state.location) {
            this.props.addPrisoner({
                name: this.state.name,
                location: this.state.location,
                skills: [{
                    skill: this.state.skill
                }]
            });
            this.setState({
                name: '',
                location: '',
                skills: [{
                    skill: '',
                    id: ''
                }]
            });
            this.props.history.push('/prisons');
        };
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Prisoner's name (required)"
                        value={this.state.name}
                        onChange={this.changeHandler}
                        required
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Prisoner's location (required)"
                        value={this.state.location}
                        onChange={this.changeHandler}
                        required
                    />
                    <button type="submit">Add future employee</button>
                </form>
            </div>
        )
    };
};

export default connect(null, { addPrisoner })(PrisonerForm);