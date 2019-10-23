import React from 'react';
import axios from 'axios';

class FormView extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      username: "",
      address: "",
      age: "",
      birthdate: "",
      email: "",
      contactNum: "",
      cardId: "",
      position: "",
      department: "",
      gender: "",
      aboutMe: "",
      startDate: ""
    }

  }


  componentDidMount () {
    axios.get(`http://localhost:5000/form/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          username: res.data.username,
          address: res.data.address,
          age: res.data.age,
          birthdate: res.data.birthdate,
          email: res.data.email,
          contactNum: res.data.contactNum,
          cardId: res.data.cardId,
          position: res.data.position,
          department: res.data.department,
          gender: res.data.gender,
          aboutMe: res.data.aboutMe,
          startDate: res.data.startDate
      })
    })
  }

  render () {
    return (
      <div>
        <ul class="list-group">
          <li class="list-group-item">Username: {this.state.username}</li>
          <li class="list-group-item">Address: {this.state.address}</li>
          <li class="list-group-item">Age: {this.state.age}</li>
          <li class="list-group-item">Birthdate: {this.state.birthdate}</li>
          <li class="list-group-item">Email: {this.state.email}</li>
          <li class="list-group-item">Contact Number: {this.state.contactNum}</li>
          <li class="list-group-item">Card ID: {this.state.cardId}</li>
          <li class="list-group-item">Position: {this.state.position}</li>
          <li class="list-group-item">Department: {this.state.department}</li>
          <li class="list-group-item">Gender: {this.state.gender}</li>
          <li class="list-group-item">About Me: {this.state.aboutMe}</li>
          <li class="list-group-item">Start Date: {this.state.startDate}</li>
        </ul>
      </div>
    )
  }
}

export default FormView;