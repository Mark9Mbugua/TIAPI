import React , {Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import { updateUser } from '../redux/actions/userActions';

class UpdateUserModal extends Component{
    state = {
        name: this.props.name,
        occupation: this.props.occupation,
        email: this.props.email,
        bio: this.props.bio,
        modal: false
    };
    
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    handleSubmit = e => {
        e.preventDefault();  
        const user = {
          name: this.state.name,
          occupation: this.state.occupation,
          email: this.state.email,
          bio: this.state.bio
        };
        const id = this.props.id;
        //console.log(id)
        
        // update user via updateUser action
        this.props.updateUser(user, id);

        this.toggle()
    
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };
 
    render(){
        //console.log(this.props)
        return(
            <div>
                <EditIcon onClick={this.toggle} />
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Update User</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for='name'>Name</Label>
                                <Input
                                    type='text'
                                    name='name'
                                    id='name'
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <Label for='occupation'>Occupation</Label>
                                <Input
                                    type='text'
                                    name='occupation'
                                    id='occupation'
                                    value={this.state.occupation}
                                    onChange={this.handleChange}
                                />
                                <Label for='email'>Email</Label>
                                <Input
                                    type='email'
                                    name='email'
                                    id='email'
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                                <Label for='bio'>Bio</Label>
                                <Input
                                    type='text'
                                    name='bio'
                                    id='bio'
                                    value={this.state.bio}
                                    onChange={this.handleChange}
                                />
                                <Button color='dark' style={{ marginTop: '2rem' }}>
                                    Update User
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps, 
    { updateUser }
)(UpdateUserModal);