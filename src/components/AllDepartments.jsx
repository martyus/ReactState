import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Department from './Department'
import DepartmentForm from './DepartmentForm'

const AllDepartments = () => {

    const departments = [{"dep_id":1,"dep_name":"IT","team_id":9},
    {"dep_id":2,"dep_name":"HR","team_id":0},{"dep_id":3,"dep_name":"IT","team_id":7},
    {"dep_id":4,"dep_name":"OPS","team_id":1},{"dep_id":5,"dep_name":"FIN","team_id":3},
    // {"dep_id":6,"dep_name":"IT","team_id":5},{"dep_id":7,"dep_name":"OPS","team_id":3},
    // {"dep_id":8,"dep_name":"OPS","team_id":3},{"dep_id":9,"dep_name":"OPS","team_id":3},
    // {"dep_id":10,"dep_name":"OPS","team_id":3},{"dep_id":11,"dep_name":"OPS","team_id":3},
    // {"dep_id":12,"dep_name":"OPS","team_id":3},{"dep_id":13,"dep_name":"FIN","team_id":1},
    // {"dep_id":14,"dep_name":"FIN","team_id":2},{"dep_id":15,"dep_name":"FIN","team_id":3},
    // {"dep_id":16,"dep_name":"IT","team_id":8},{"dep_id":17,"dep_name":"IT","team_id":100}
    ]
    
    
 
    let deptList = departments.map(dept => 
            <div key={dept.dep_id}>
                <Department dept = {dept}/>
            </div>)

    const addDepartment = (dept)=>{
        departments.push(dept);
        console.log(departments);
    }


    return (
        <>
        <h1>AllDepartments: </h1>
        <Container>
            <Row>
            <Col>{deptList}</Col>
            <Col><DepartmentForm submitHandler = {addDepartment} /></Col>
            </Row>
        </Container>
       
        </>
    )
}

export default AllDepartments