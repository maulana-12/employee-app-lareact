import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

class DeleteModal extends Component {

    constructor(props) {
        super(props);
    }

    // Delete employee data
    deleteEmployeeData = (employee) => {
        axios.delete('/delete/employee/data/' + employee).then(() => {
            toast.error("Employee Deleted successfully")

            setTimeout(() => {
                location.reload()
            }, 5000);
        })
    }
    render() {
        return (
            <div className="modal fade" id={"deleteModal" + this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Employee Delete</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure to delete this Employee Data <strong>{this.props.employeeData.currentEmployeeName}</strong> ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">No</button>
                            <button type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    this.deleteEmployeeData(this.props.modalId)
                                }}
                            >Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteModal