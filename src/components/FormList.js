import React from'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FormsTable = (props) => {
  return (<tr>
    <td>
      <Link to={`/${props.forms._id}`}>
        {props.forms.username}
      </Link>
    </td>
    <td>{props.forms.address}</td>
    <td>{props.forms.age}</td>
    <td>
      <Link to={`/edit/${props.forms._id}`}>Edit Exercise</Link> || 
      <a href="#" onClick={() => {props.delete(props.forms._id)}}>Delete</a>
    </td>

  </tr>)
}


class FormList extends React.Component {
  constructor (props) {
    super(props);

    this.state= {
      forms: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/form/')
      .then(forms => {
        this.setState({
          forms: forms.data
        })
      })
      .catch(err => console.log("error at forms List"))
  }

  onDeleteForm = (id) => {
    axios.delete('http://localhost:5000/form/'+ id)
      .then(res => console.log(res.data))
      .catch(err => console.log('error in delete'))

    this.setState({
      forms: this.state.forms.filter(el => el._id !== id)
    })
  }

  formsList = () => {
    return this.state.forms.map(form => {
      return <FormsTable forms={form} delete={this.onDeleteForm} key={form._id}/>
    }) 
  }

  render() {
    return (
      <div>
        <h3>Forms List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Address</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.formsList()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FormList;