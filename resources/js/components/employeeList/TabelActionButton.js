import React, { Component } from 'react';
import ViewModal from './Modals/ViewModal';
import axios from 'axios';

class TabelActionButtons extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentEmployeeName: null,
            currentEmployeeSalary: null,
        }
    }

    // Getting individual employee data.
    getEmployeeDetails = (id) => {
        axios.post('/get/individual/employee/details', {
            employeeId: id
        }).then((response) => {
            this.setState({
                currentEmployeeName: response.data.name,
                currentEmployeeSalary: response.data.salary
            })
            console.log(response.data)
        })
    }
    render() {
        return (
            <div className="btn-group" role="group" >
                <button type="button"
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target={'#viewModal' + this.props.eachRowId}
                    onClick={() => { this.getEmployeeDetails(this.props.eachRowId) }}
                >View</button>
                <ViewModal modalId={this.props.eachRowId} employeeData={this.state} />
                <button type="button"
                    className="btn btn-warning">Update</button>
                <button type="button"
                    className="btn btn-danger">Delete</button>
            </div>
        )
    }
}

export default TabelActionButtons