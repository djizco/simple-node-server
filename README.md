# Simple Node Server
A simple HTTP server using node and express that serves the contents of a dist folder.

#### Requirements
* Mac or Unix OS
* Latest [Node.js](https://nodejs.org/en/)

#### Setup
1. Place the desired contents to be served in a folder called 'dist' in the root of the directory.

2. Then in your terminal run:

```
npm install
```

3. For a local environment, this is enough. For a production environment, you will need to configure environment variables in /etc/profile, /etc/environment or other profile settings. This may take some research and may differ based on your setup.

Environment Variables for production:
```
PORT=80 // HTTP Port
NODE_ENV=production
```

#### Start the server
```
npm start
```
"CTRL + C" will stop the server

#### Run a Persistent Production Server
We will use an npm packaged called [forever](https://github.com/foreverjs/forever) to run a persistent server.

In your terminal:
```
sudo npm install -g forever
forever start index.js
```

You can use these commands to list your forever processes and stop them.
```
forever list
forever stop <index>
forever stopall // stops all processes
```
