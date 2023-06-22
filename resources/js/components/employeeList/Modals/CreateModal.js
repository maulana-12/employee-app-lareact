import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

class CreateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null,
        }
    }

    // Creating employee name state
    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,
        })
    }

    // Creating employee salary state
    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        })
    }

    // Storing Employee Data
    storeEmployeeData = () => {
        axios.post('/store/employee/data', {
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,
        }).then(() => {
            toast.success("Employee Saved Successfully")

            setTimeout(() => {
                location.reload()
            }, 5000);
        })
    }

    render() {
        return (
            <>
                <div className='row text-right mb-3 pb-3'>
                    <button className='btn btn-info text-right col-3 offset-md-9'
                        data-toggle="modal"
                        data-target="#modalCreate"
                    >
                        Add New Employee
                    </button>
                </div>
                <div className="modal fade" id="modalCreate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className='form'>
                                    <div className='form-group mb-3'>
                                        <input type='text'
                                            id='employeeName' className='form-control'
                                            placeholder='Masukan nama pekerja'
                                            onChange={this.inputEmployeeName} />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <input type='number'
                                            id='employeeSalary' className='form-control'
                                            placeholder='Masukan salary'
                                            onChange={this.inputEmployeeSalary} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button"
                                    className="btn btn-primary"
                                    value="save"
                                    onClick={this.storeEmployeeData}
                                >Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateModal