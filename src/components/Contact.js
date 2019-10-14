import React from 'react';
import './Contact.css'

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            online: props.online
        }
    }

    handleClick = () =>{
        this.setState({online : !this.state.online})
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
                <div>
                    <h1 className="name">{this.props.name}</h1>
                    <div className="status">
                        <div className="status-text" >
                        <div onClick={this.handleClick}  className={this.state.online ? "status-online" : "status-offline"}></div>
                        {this.state.online ? 'online': 'offline'}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

//onClick={event => { const newOnline = !this.state.online;  
//this.setState({online: newOnline})
//}}

export default Contact;