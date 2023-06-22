<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Employee $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        try {
            $employee->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }


    // Get employee list
    public function getEmployeeList()
    {
        try {
            $employees = Employee::orderBy('id', 'DESC')->get();
            return response()->json($employees);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    /**
     * Get individual employee details.
     */
    public function getEmployeeDetails(Request $request)
    {
        try {
            $employeeData = Employee::findOrFail($request->get('employeeId'));
            return response()->json($employeeData);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    /**
     * Update employee data.
     */
    public function updateEmployeeData(Request $request)
    {
        try {
            $employeeId = $request->get('employeeId');
            $employeeName = $request->get('employeeName');
            $employeeSalary = $request->get('employeeSalary');

            Employee::where('id', $employeeId)->update([
                'name' => $employeeName,
                'salary' => $employeeSalary
            ]);

            return response()->json([
                'name' => $employeeName,
                'salary' => $employeeSalary
            ]);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
