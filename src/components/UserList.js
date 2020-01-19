import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getUsers } from '../redux/actions/userActions';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';

class UserList extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    user : PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props.user;
    return (
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Occupation</th>
            <th>Email</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.occupation}</td>
            <td>{user.email}</td>
            <td>{user.bio}</td>
          </tr>
        ))}
        </tbody>
    </Table>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUsers }
)(UserList);