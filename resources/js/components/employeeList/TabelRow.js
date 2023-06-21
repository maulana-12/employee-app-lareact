import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TabelActionButtons from './TabelActionButton';

class TabelRow extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <th scope="row">{this.props.data.id}</th>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.salary}</td>
                <td>
                    <TabelActionButtons eachRowId={this.props.data.id} />
                </td>
            </tr>
        )
    }
}

export default TabelRow