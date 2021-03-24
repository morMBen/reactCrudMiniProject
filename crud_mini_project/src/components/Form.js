import React from 'react'
import Input from './Input'

class Form extends React.Component {
    state = { artist: '', song: '', category: '', image: '' }

    onUserChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    render() {
        return (
            <>
                <label>Artist</label>
                <Input
                    id='artist'
                    onUserChange={this.onUserChange}
                    myValue={this.state.userInput}
                />
                <label>Song</label>
                <Input
                    id='song'
                    onUserChange={this.onUserChange}
                    myValue={this.state.userInput}
                />
                <label>Category</label>
                <Input
                    id='category'
                    onUserChange={this.onUserChange}
                    myValue={this.state.userInput}
                />
                <label>Image</label>
                <Input
                    id='image'
                    onUserChange={this.onUserChange}
                    myValue={this.state.userInput}
                />
            </>
        )
    }
}

export default Form