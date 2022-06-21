
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import one from '../assets/1.jpg';

const Department = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require(`../assets/${props.dept.dep_id}.jpg`)} />
      <Card.Body>  
        <Card.Title>{props.dept.dep_name}</Card.Title>
          <Card.Text>
          This is team {props.dept.team_id}.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
       </Card.Body>
    </Card>
  )
}

export default Department