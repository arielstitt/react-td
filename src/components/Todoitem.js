import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NONAME } from 'dns';


class Todoitem extends Component {
    getStyle = () => {
        if(this.props.todo.completed){
            return{
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <p>{ this.props.todo.title }</p>
            </div>
        );
    }
}
// PropTypes
Todoitem.propTypes = {
    todos: PropTypes.object.isRequired
}


export default Todoitem;