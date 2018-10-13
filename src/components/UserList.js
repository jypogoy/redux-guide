import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import PropTypes from 'prop-types';

class UserList extends Component {
  
    componentWillMount() {
        this.props.userActions.fetchUsers();
    }

    renderData(item) {
        return <div key={item.id}>{item.name}</div>
    }
  
    render() {
        if (!this.props.users) {
            return (
                <div>
                    Loading Users...
                </div>
            );
        } else {
            return (
                <div className="">
                    {
                        this.props.users.map((item, index) => {
                            return (
                              this.renderData(item)
                            );      
                        })
                    }
                </div>
            );
        }
    }
}

UserList.propTypes = {
    userActions: PropTypes.object,
    users: PropTypes.array
};

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);