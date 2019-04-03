import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from 'react-router-dom'

import Card from "components/Card/Card.jsx";
// import { thArray, tdArray } from "variables/Variables.jsx";
class Users extends Component {
  constructor(props){
    super(props)
    this.state = {
      thArray : ["image", "Full Name", "Email" , "Role", "Status", "Created At", "Edit"],
      tdArray : [
        ["https://via.placeholder.com/30", "Dakota Rice", "Dakota@gmail.com", "Teacher", "CONFIRMED", "4/1/2019", "BTN"],
        ["https://via.placeholder.com/30", "Minerva Hooper", "Minerva@gmail.com", "Teacher", "UNCONFIRMED", "4/5/2019","BTN"],
        ["https://via.placeholder.com/30", "Sage Rodriguez", "Ro@gmail.com", "Student", "CONFIRMED", "4/3/2019", "BTN"],
        ["https://via.placeholder.com/30", "Philip Chaney", "Philip@gmail.com", "Student", "CONFIRMED", "4/2/2019", "BTN"],
        ["https://via.placeholder.com/30", "Doris Greene", "Doris@gmail.com", "Student", "CONFIRMED", "4/1/2019", "BTN"],
        ["https://via.placeholder.com/30", "Mason Porter", "Mason@gmail.com", "Student", "UNCONFIRMED", "4/5/2019", "BTN"]
      ]
    }
  }
  render() {
    const { thArray, tdArray } = this.state
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Available User"
                category="Here is whole users on the system"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return createTableRow(prop, key)
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            <Col md={12}>
              <Card
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}> {prop} </td>
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


const createTableRow = (prop, key) => {
  const editButtonStyle = {
    backgroundColor: "#8a8a8a", border: "none", color: "white", width: "40px", height: "30px", fontSize: "24px",borderRadius: "5px"
  }
  const thArray = ["image", "Full Name", "Email" , "Role", "Status", "Created At", "Edit"];
  if (key === thArray.indexOf("image")) {
    return <td>
              <img src={prop}></img>
           </td>
  }
  if (key === thArray.indexOf("Edit")) {
    return <td>
              <Link to={{
                  pathname: "/user",
                  state: { fromDashboard: true, userData:prop }
                }}>
                <button onClick={this._editClicked} style={editButtonStyle}>
                  <i className={"pe-7s-edit"} />
                </button>
              </Link>
           </td>
  }
  return <td key={key}>{prop}</td>
}


export default Users;
