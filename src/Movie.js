import React, { Component } from 'react';

// class Movie extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>The Lord of the Rings: {this.props.title}</h1>
//                 <p>{this.props.hours}h {this.props.minutes}min</p>  
//             </div>
//         )
//     }
// }

function Movie(props) {
    return (
        <div>
            <h1>The Lord of the Rings: {props.title}</h1>
            <p>{props.hours}h {props.minutes}min</p>  
        </div>
    )
}

export default Movie