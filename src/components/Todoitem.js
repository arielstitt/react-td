import React, { Component } from 'react';
import { whileStatement } from '@babel/types';
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
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input
                        type="checkbox"
                        onChange={this.props.markComplete.bind(this, id)}
                    /> {''}
                    {title}
                    <button
                        style={btnstyle}> x
                    </button>
                </p>
            </div>
        );
    }
}
const btnstyle = {
    background: '#ff0000',
    color: 'white',
    border: 'none',
    padding:'5px 10px',
    borderRadius: '50%',
    curser: 'pointer',
    float: 'right'
}
// PropTypes
// Todoitem.propTypes = {
//     todos: PropTypes.object.isRequired
// }


export default Todoitem;