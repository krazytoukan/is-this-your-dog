# Is This Your Dog?!

Have you ever seen a dog on the side of the road, grabbed it and tried to find its owner to no avail? Have you ever lost a dog and spent hours searching and putting up signs for that dog?

Is This Your Dog is a a crowdsourced website which allows users to post photos of dogs they have found (or that they just took a really good photo of!) so that their owners can easily find their missing poocherinos quickly and, hopefully, without too much worry.  Found a dog? Post its photo, location, and description here!

Users can search for their dogs with "Dog Tags" by location, name, breed, defining features, however you could want. Users can also chat with other users in order to arrange pickup of their canine companions.


## Screenshots

Home Page: ![](https://i.imgur.com/Y8TPuCw.png)
Show Page: ![](https://i.imgur.com/2dTlTYM.png)
Chat: ![](https://i.imgur.com/zGVHFvh.png)
Found Dog: ![](https://i.imgur.com/WGjWi1R.png)

##Technologies

React Framework (For Client Side Front End)
Node.js using Express.js for Back End Server Handling
Amazon Webservices S3 for Photo Upload and storage
HTML
CSS
Vanilla JavaScript
Semantic UI
Semantic UI for React (For Styling)
Mongoose (For MongoDB based data management)
Mongo DB
JWT- Tokens (For Client Validation and Token/Cookie management)
Nodemon
Socket.io (To extablish websocket for chat function)
Bycrypt for Node.js (For password encryption and decryption)
GitHub
Axios (API Client)
Serverside RESTful JSON API.


### Installation/startup instructions.
Step by step

- Download this directory from Github to a local directory on your computer
- With Amazon Webservices S3, create a virtual storage bucket.
- Allow public access to the bucket, but keep your AWS access keys, secret access key, and bucket name secret
- Open Terminal
- Open the is-this-your-dog directory and type in: npm i (This will install npm packages needed to run the serversides app)
- Create a .env file in the root is-this-your-dog directory
- Populate the .env file with a JWT_SECRET, your amazon BUCKET_NAME, your amazon AWS_ACCESS_KEY and your AWS_SECRET_KEY
- Make sure you have MongoDB.
- Initiate a Mongo local server with command MONGOD
- Open a new terminal tab and use command nodemon or node server.js to start the server backend.
- Navigate into the client side folder from the is-this-your-dog root directory by using the command cd client
- run npm start from within the client directory to being the client-side React App.
- Open a new tab on your browser and type in localhost:3000 in the address bar. (If you encounter an error or a different application loads, make sure you do not have a previous local server running in a different terminal tab.)
- Start posting dogs and chatting with your self.


## Backlog
- Implement a third private message model so that users can contact each other directly.
- Implement geo-tagging of Dog Location with Google Maps API
- Improve chat functionality by adding a modal or side bar for chat rather than appending to bottom.
- Contemplating changing build to lazy load and refactoring search parameters to allow for scalability
