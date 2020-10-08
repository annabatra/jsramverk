import React from 'react';
import io from 'socket.io-client';

const allMessages = document.getElementById("all-messages");
const newInput = document.getElementById("new-input");

class Chatfunction extends React.Component {
    constructor() {
        super();
        this.state = {
            user: "",
            users: []
        }

        this.socket = io('https://socket-server.jsramverk.me');
        this.newInput = document.getElementById("new-input");
    }

    componentDidMount() {
        const allMessages = document.getElementById("all-messages");
        this.socket.on('chat message', function (message) {
            console.log("efter socket msg");
            let addedMessage = document.createElement("p");

            addedMessage.textContent =
                "[" + message.currtime + "] "
                + message.user + " sa: "
                + message.msg;

            allMessages.appendChild(addedMessage);
        });

        this.socket.on('user connected', function (user) {
            let newUserConnected = document.createElement("p");
            newUserConnected.style.fontStyle = "italic";

            newUserConnected.textContent = user.user + " anslöt till chatten!";

            allMessages.appendChild(newUserConnected);
        })
    }

    handleUser = (event) => {
        this.setState({ user: event.target.value })
    }

    handleInput = (event) => {
        if (event.key === "Enter") {
            this.checkUser();
            const timeStamp = new Date().toLocaleString();

            this.socket.emit('chat message', {
                currtime: timeStamp,
                user: this.state.user,
                msg: event.target.value
            });

            event.target.value = "";
        }
    }

    checkUser = () => {
        if (!(this.state.users.includes(this.state.user))) {
            this.state.users.push(this.state.user);

            this.socket.emit('user connected', {
                user: this.state.user
            });
        } else {
            console.log(this.state.user + " already connected to chat")
        }
    };

    render() {
        return (
            <div className="App">
                <article className="article-standard">
                    <h2>Chatta här</h2>
                    <div id="all-messages" class="all-messages"></div>

                    <p><b>Namn:</b></p>
                    <input id="new-user" type="text" required name="user" onChange= {this.handleUser} />

                    <p><b>Meddelande:</b></p>
                    <input id="new-input" type="text" class="new-input" required name="msg" onKeyDown= {this.handleInput}
                    />
                    <p><b>Tryck enter för att skicka</b></p>
                </article>
            </div>
        )
    }
}


export default Chatfunction;
