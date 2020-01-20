import React, { Component } from 'react';
import { connect } from 'react-redux';
import MUIDataTable from "mui-datatables";
import { getUsers } from '../redux/actions/userActions';
import PropTypes from 'prop-types';
import UpdateUserModal from './UpdateUserModal';


class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      occupation: '',
      email: '',
      bio: '',
    };
  }
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    user : PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getUsers();
  }
    
  render() {
    const { users } = this.props.user;
    const columns = [
      "id",
      "name", 
      "occupation", 
      "email", 
      "bio",
      "created_at",
      "updated_at",
      {
        name: "Edit",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            const rowId = tableMeta.rowData[0]
            const name = tableMeta.rowData[1]
            const occupation = tableMeta.rowData[2]
            const email = tableMeta.rowData[3]
            const bio = tableMeta.rowData[4]

            console.log(rowId, name)

            return (
              <UpdateUserModal
                key={rowId} 
                id={rowId}
                name={name}
                occupation={occupation}
                email={email}
                bio={bio}
              />
            );
          }
        }
      }
    ];
    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      selectableRows: false
    };

    return (
      <div style={{marginTop:80}}>
        <MUIDataTable
          title={"All Users"}
          data={users}
          columns={columns}
          options={options}
        />
      </div>
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