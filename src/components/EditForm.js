import React from'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class EditForm extends React.Component {

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

  componentDidMount() {
    // console.log('Edit form')
    // axios.get(`http://localhost:5000/form/${this.props.match.params.id}`)
    //   .then((res) => {
    //     this.setState({
    //       username: res.data.username,
    //       address: res.data.address,
    //       age: res.data.age,
    //       birthdate: format(new Date(res.data.birthdate), 'yyyy-LL-dd'),
    //       email: res.data.email,
    //       contactNum: res.data.contactNum,
    //       cardId: res.data.cardId,
    //       position: res.data.position,
    //       department: res.data.department,
    //       gender: res.data.gender,
    //       aboutMe: res.data.aboutMe,
    //       startDate: format(new Date(res.data.startDate), 'yyyy-LL-dd')
    //   })
    axios.get('http://localhost:5000/form/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          address: response.data.address,
          age: response.data.age,
          birthdate: "",
          email: response.data.email,
          contactNum: response.data.contactNum,
          cardId: response.data.cardId,
          position: response.data.position,
          department: response.data.department,
          gender: response.data.gender,
          aboutMe: response.data.aboutMe,
          startDate: ""
        })
        console.log(response);
      })
    //   console.log('Edit form')

    // })
  }
  

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
    console.log('test')
  }
  
  onChangeAddress = (e) => {
    this.setState({
      address: e.target.value
    })
  }

  onChangeAge = (e) => {
    this.setState({
      age: e.target.value
    })
  }

  onChangeBirthDate = (date) => {
    this.setState({
      birthdate: date
    })
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onChangeContactNum = (e) => {
    this.setState({
      contactNum: e.target.value
    })
  }

  onChangeCardId = (e) => {
    this.setState({
      cardId: e.target.value
    })
  }

  onChangePosition = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  onchangeDepartment = (e) => {
    this.setState({
      department: e.target.value
    })
  }

  onChangeGender = (e) => {
    this.setState({
      gender: e.target.value
    })
  }

  onChangeAboutMe = (e) => {
    this.setState({
      aboutMe: e.target.value
    })
  }

  onChangeStartDate = (date) => {
    this.setState({
      startDate: date
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const form = {
      username: this.state.username,
      address: this.state.address,
      age: this.state.age,
      birthdate: this.state.birthdate,
      email: this.state.email,
      contactNum: this.state.contactNum,
      cardId: this.state.cardId,
      position: this.state.position,
      department: this.state.department,
      gender: this.state.gender,
      aboutMe: this.state.aboutMe,
      startDate: this.state.startDate
    }

    axios.post('http://localhost:5000/form/edit/'+this.props.match.params.id, form)
      .then(res => console.log(res.data))
      .catch(err => console.log(`Error at Edit forms`))

    window.location = "/"

  }

  render() {
    return (
      <div>
        <h3>Edit Form</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              className="form-control"
              type="text"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <input className="form-control"
              type='text'
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
          </div>

          <div className="form-group">
            <label>Age:</label>
            <input className="form-control"
              type='text'
              value={this.state.age}
              onChange={this.onChangeAge}
            />
          </div>

          <div className="form-group">
            <label>Birth Date: </label>
            <div>
              <DatePicker
                selected={this.state.birthdate}
                onChange={this.onChangeBirthDate}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input className="form-control"
              type='text'
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="form-group">
            <label>Contact Number:</label>
            <input className="form-control"
              type='text'
              value={this.state.contactNum}
              onChange={this.onChangeContactNum}
            />
          </div>

          <div className="form-group">
            <label>Card ID:</label>
            <input className="form-control"
              type='text'
              value={this.state.cardId}
              onChange={this.onChangeCardId}
            />
          </div>

          <div className="form-group">
            <label>Position:</label>
            <input className="form-control"
              type='text'
              value={this.state.position}
              onChange={this.onChangePosition}
            />
          </div>

          <div className="form-group">
            <label>Department:</label>
            <input className="form-control"
              type='text'
              value={this.state.department}
              onChange={this.onchangeDepartment}
            />
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <input className="form-control"
              type='text'
              value={this.state.gender}
              onChange={this.onChangeGender}
            />
          </div>

          <div className="form-group">
            <label>About Me:</label>
            <input className="form-control"
              type='text'
              value={this.state.aboutMe}
              onChange={this.onChangeAboutMe}
            />
          </div>

          <div className="form-group">
            <label>Start Date: </label>
            <div>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.onChangeStartDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type='submit'
              value="Edit Form"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditForm;