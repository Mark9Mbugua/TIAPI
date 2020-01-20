import React, { Component } from 'react';
import { connect } from 'react-redux';
import MUIDataTable from "mui-datatables";
import { getUsers } from '../redux/actions/userActions';
import PropTypes from 'prop-types';
import UpdateUserModal from './UpdateUserModal';


class UserList extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    user : PropTypes.object.isRequired,
  };

  componentDidMount() {
    // get all users from the props via the getUsers action
    this.props.getUsers();
  }
    
  render() {
    // destructure users from the props we mapped from the state (redux) 
    const { users } = this.props.user;

    // use of Material UI datatables to neatly display the API data
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
            const cellData = tableMeta.rowData
            
            const rowId = cellData[0]
            const name = cellData[1]
            const occupation = cellData[2]
            const email = cellData[3]
            const bio = cellData[4]

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
      <div style={{marginTop:30}}>
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