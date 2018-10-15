import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../actions/postActions';
import PropTypes from 'prop-types';

class PostList extends Component {
  
    componentWillMount() {
        this.props.postActions.fetchPosts();
    }

    renderData(item) {
        return <div key={item.id}>{item.name}</div>
    }
  
    render() {
        if (!this.props.posts) {
            return (
                <div>
                    Loading Posts...
                </div>
            );
        } else {
            return (
                <div className="">
                    {/* {
                        this.props.posts.map((item, index) => {
                            return (
                              this.renderData(item)
                            );      
                        })
                    } */}
                </div>
            );
        }
    }
}

PostList.propTypes = {
    postActions: PropTypes.object,
    posts: PropTypes.array
};

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);