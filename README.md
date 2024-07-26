# Real-Time-Chat-App-Using-Node.js-Express-and-Socket.io

# Real-Time Chat Application

This is a simple real-time chat application using Node.js, Express, and Socket.io with added features such as user authentication, private messaging, and message history.

## Features

- Real-time messaging
- User authentication (registration and login)
- Private messaging
- Message history

## Prerequisites

- Node.js
- MongoDB

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app

Install dependencies:

bash
Copy code
npm install
Set up MongoDB:

Ensure MongoDB is running locally or adjust the connection string in server/users.js and server/messages.js.

Running the Application
Start the server:

node server/server.js
Open the browser:

Navigate to http://localhost:3000.

API Endpoints
POST /auth/register: Register a new user.

Body: { "username": "user", "password": "pass" }
POST /auth/login: Login and receive a JWT token.

Body: { "username": "user", "password": "pass" }

Development
User Authentication: Implemented using JWT and bcrypt.
Private Messaging: Allows direct messages between users.
Message History: Stored in MongoDB for retrieval.

Contributing
Feel free to open issues or submit pull requests.


### Conclusion

This enhanced application now includes user authentication, private messaging, and message history. The README provides instructions for setting up and running the project. You can extend the functionality further based on your requirements.

