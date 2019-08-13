import React, { Component } from 'react';
// import PropTypes from 'prop-types';


class Todoitem extends Component {
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // using ternary to switch the styling on completed items
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }
    render() {
        const { } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> {''}
                    {this.props.todo.title}
                </p>
            </div>
        );
    }
}
// PropTypes
// Todoitem.propTypes = {
//     todos: PropTypes.object.isRequired
// }


export default Todoitem;