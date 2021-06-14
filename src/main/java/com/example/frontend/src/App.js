import React from "react";
import axios from 'axios';
import { REQUEST_URL } from './saga/index';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      id: 0,
      name: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    this.getAllEngineers();
    this.clearForm();
  }

  getAllEngineers() {
    axios.get(REQUEST_URL)
      .then((response) => {
        console.log(response.status);
        this.setState({ users: response.data });
      });
  }

  submit(evenet, id) {
    console.log(id)
    evenet.preventDefault();
    if (id === 0) {
      if (this.state.name === '' || this.state.email === '' || this.state.password === '' || this.state.lastName === "") {
        window.alert("Name/LastName/Email/Password can not be empty!")
        return;
      }
      axios.post(REQUEST_URL, {
        name: this.state.name,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }).then(() => {
        this.componentDidMount(); //allows to rerender  !
      })
    } else {
      axios.put(REQUEST_URL, {
        id: id,
        name: this.state.name,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }).then(() => {
        this.componentDidMount();
      })
    }
  }
  delete(id) {
    axios.delete(REQUEST_URL + id)
      .then(() => {
        this.componentDidMount();
      })
  }
  edit(id) {
    axios.get(REQUEST_URL + id)
      .then((res) => {
        this.setState({
          id: res.data.id,
          name: res.data.name,
          lastName: res.data.lastName,
          email: res.data.email,
          password: res.data.password
        });
      })
  }

  clearForm = () => {
    this.setState({ name: "" })
    this.setState({ lastName: "" })
    this.setState({ email: "" })
    this.setState({ password: "" })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s6">
              <form onSubmit={(e) => this.submit(e, this.state.id)}>
                <div className="input-field col s12">
                  <i className="material-icons prefix">person</i>
                  <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} type="text" id="autocomplete-input" className="autocomplete" />
                  <label htmlFor="autocomplete-input">Enter Name</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">person</i>
                  <input value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} type="text" id="autocomplete-input" className="autocomplete" />
                  <label htmlFor="autocomplete-input">Last Name</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">mail</i>
                  <input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} type="email" id="autocomplete-input" className="autocomplete" />
                  <label htmlFor="autocomplete-input">Enter Email</label>
                </div>
                <div className="input-field col s12">
                  <i className="material-icons prefix">vpn_key</i>
                  <input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} type="password" id="autocomplete-input" className="autocomplete" />
                  <label htmlFor="autocomplete-input">Enter Password</label>
                </div>
                <button className="btn waves-effect waves-light right" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
                </button>
              </form>
              <button className="waves-effect waves-light btn" onClick={this.clearForm}>Clear <i className="material-icons right">send</i></button>
            </div>
            <div className="col s6">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    this.state.users.map(user =>
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>
                          <button onClick={(e) => this.edit(user.id)} className="btn waves-effect waves-light" type="submit" name="action">
                            <i className="material-icons ">edit</i>
                          </button>
                        </td>
                        <td>
                          <button onClick={(e) => this.delete(user.id)} className="btn waves-effect waves-light " type="submit" name="action">
                            <i className="material-icons ">delete</i>
                          </button>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;

