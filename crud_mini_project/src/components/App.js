import axios from 'axios';
import React from 'react';
import Header from './Header';
import List from './List';
import Form from './Form';


class App extends React.Component {
  state = { data: null, userInput: '', }

  async componentDidMount() {
    const response = await axios.get('https://605b218e27f0050017c063ab.mockapi.io/youtube')
    this.setState({ data: response.data }, () => {
      // console.log(this.state.data)
    })
  }

  onUserChange = (e) => {
    this.setState({ userInput: e.target.value })
  }

  removeItem = (e) => {
    console.log(e.target.parentElement)
  }
  render() {
    return (
      <div>
        <Header />
        <Form />
        <List apiList={this.state.data} removeItem={this.removeItem} />
      </div>
    )
  }
}

export default App;

