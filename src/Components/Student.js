import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { NavLink } from 'react-router-dom';
import {   useSelector } from 'react-redux'

const Student = ({ studentObj }) => {

    const studentDataFromStore = useSelector((state) => state.studentReducer)

    return (
        <div >
          <div className="table-heading">
        <h1>Students Details</h1>
        <button className="btn btn-outline-success btn-lg addstu"><NavLink to="/addstudent" style={{ textDecoration: "none", color: "black" }}> Add Student</NavLink></button>
      </div>
        
<TableContainer >
      <Table  sx={{ maxWidth: 900 }} className="table table-warning table-hover border border-success border-4 table-marg" >
              <TableHead className='bold'>
                  <TableRow>
                      <TableCell >Name</TableCell>
                      <TableCell align="right">Age</TableCell>
                      <TableCell align="right">Course</TableCell>
                      <TableCell align="right">Batch</TableCell>
                      <TableCell align="right">Change</TableCell>
                  </TableRow>
              </TableHead>

          <TableBody>
              {studentDataFromStore.map((row) => (
            
                <TableRow
                    key={row.id}

                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">{row.name}</TableCell>
                      <TableCell align="right">{row.age}</TableCell>
                      <TableCell align="right">{row.course}</TableCell>
                      <TableCell align="right">{row.batch}</TableCell>
                      <TableCell align="right"  ><NavLink to={(`/student/des/${row.id}`)} style={{textDecoration:"none"}} > edit </NavLink></TableCell>
                </TableRow>
         ))}
          
          </TableBody>
      </Table>
    </TableContainer>
        </div>


    )
}

export default Student
