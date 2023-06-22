import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

class UpdateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null,
        }
    }

    // Updating employee name state
    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,
        })
    }

    // Updating employee salary state
    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        })
    }

    static getDerivedStateFromProps(props, current_state) {
        let employeeUpdate = {
            employeeName: null,
            employeeSalary: null,
        }

        // Updating data from input
        if (current_state.employeeName && (current_state.employeeName !== props.employeeData.currentEmployeeName)) {
            return null
        }
        if (current_state.employeeSalary && (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary)) {
            return null
        }

        // Updating data from props below
        if (current_state.employeeName !== props.employeeData.currentEmployeeName ||
            current_state.employeeName === props.employeeData.currentEmployeeName) {
            employeeUpdate.employeeName = props.employeeData.currentEmployeeName
        }

        if (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary ||
            current_state.employeeSalary === props.employeeData.currentEmployeeSalary) {
            employeeUpdate.employeeSalary = props.employeeData.currentEmployeeSalary
        }

        return employeeUpdate;
    }

    updateEmployeeData = () => {
        axios.post('/update/employee/data', {
            employeeId: this.props.modalId,
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,
        }).then(() => {
            // console.log(response)
            toast.success("Employee Updated Successfully");
            setTimeout(() => {
                location.reload()
            }, 5000)
        })
    }
    render() {
        return (
            <div className="modal fade" id={"updateModal" + this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='form'>
                                <div className='form-group mb-3'>
                                    <input type='text'
                                        id='employeeName' className='form-control'
                                        value={this.state.employeeName ?? ""}
                                        onChange={this.inputEmployeeName} />
                                </div>
                                <div className='form-group mb-3'>
                                    <input type='text'
                                        id='employeeSalary' className='form-control'
                                        value={this.state.employeeSalary ?? ""}
                                        onChange={this.inputEmployeeSalary} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary"
                                value={"Update"}
                                onClick={this.updateEmployeeData}
                            >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateModal