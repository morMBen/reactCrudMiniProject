import React from 'react'
import Input from './Input'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = { modelName: '', company: '', price: '', img: '', id: '' }
    }

    onUserChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    handleSubmit = () => {
        this.setState({ modelName: '', company: '', price: '', img: '' }, () => {
        })
        this.props.handleCallback(this.state);
    };

    render() {
        return (
            < div className="ui form">
                <div className="two fields">
                    <div className="field">
                        < label >Company</label >
                        <Input
                            id='company'
                            onUserChange={this.onUserChange}
                            myValue={this.state.company}
                        />
                    </div>
                    <div className="field">
                        <label>Model</label>
                        <Input
                            id='modelName'
                            onUserChange={this.onUserChange}
                            myValue={this.state.modelName}
                        />
                    </div>
                </div>
                <div className="two fields">
                    <div className="field">
                        <label>Price</label>
                        <Input
                            id='price'
                            onUserChange={this.onUserChange}
                            myValue={this.state.price}
                        />
                    </div>
                    <div className="field">
                        <label>Image URL</label>
                        <Input
                            id='img'
                            onUserChange={this.onUserChange}
                            myValue={this.state.img}
                        />
                    </div>
                </div>
                <button className="ui submit button" onClick={this.handleSubmit} >Submit</button>
            </div >
        )
    }
}

export default Form