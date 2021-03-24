import React from 'react';
import API from "./api/moakApi";
// import axios from 'axios';

import List from './List';
import Form from './Form';

import MyApi from './api/MyApi'

class App extends React.Component {
  state = { data: null, userInput: '' }

  async componentDidMount() {

    const response = await MyApi();
    this.setState({ data: response.data, id: '' }, () => {
    })
  }

  onUserChange = (e) => {
    this.setState({ userInput: e.target.value })

  }

  createNew = async (state) => {
    // console.log(state)
    try {
      const newSong = {
        company: state.company,
        modelName: state.modelName,
        price: state.price,
        img: state.img,
      };
      const { data } = await API.post('/cars/', newSong);
      this.setState({ data: [...this.state.data, data] })
    } catch (e) {
      this.setState({ errorMsg: e.message });
    }
  }

  removeItem = (id) => {
    API.delete(`/cars/${id}`);
    const data = this.state.data.filter((el) => el.id !== id);
    this.setState({ data });
  }

  update = async (value, id) => {
    const updatedItem = {
      company: value.company,
      modelName: value.modelName,
      price: value.price,
    };
    const { data } = await API.put(`cars/${id}`, updatedItem);
    const index = this.state.data.findIndex((el) => el.id === id);
    const newItems = [...this.state.data];
    const newItem = (newItems[index] = data);
    this.setState({ data: newItems });
  };
  render() {
    return (
      <div>
        <div className="ui segment">
          <h1>My Playlist</h1>
          <Form handleCallback={this.createNew} />
        </div>
        <List apiList={this.state.data} removeItem={this.removeItem} />
      </div>
    )
  }
}

export default App;

