import React, {Component} from 'react';
import Message from 'Message';
import firebase from 'firebase';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: 'Mico',
            message: '',
            list: [],
        };

        this.messageRef = firebase.database.ref().child('messages');
        this.listenMessages();
    }
}

componentWillReceiveProps() {
    if(nextProps.user) {
        this.setState({'username': nextProps.user.displayName});
    };
};

handleChange(event) {
    this.setState({message: event.target.value});
}

handleSend() {
    if (this.state.message) {
        var newItem = {
            userName: this.state.userName,
            message: this.state.message
        }
    }
}