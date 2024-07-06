# Task management system
The system is developed to manage the tasks related to various activities. The features include chronological ordering of tasks, and prioritizing the essential tasks. It is developed with aesthetic interface with a drag-and-drop feature. 



## Setup instruction

- Step 1: Install dependencies/node_module
  - Go to /backend directory for backend setup and run `npm install`
  - Go to /frontend directory for frontend setup and run `npm install`

- Step 2: Configure MongoDB connection URL
  Go to the backend directory and create a .env file and put it into `MONGODB_PATH=your-mongodb-connection-url`

- Step 3:  Change server port and cors origin (Optional)
by default your server running in port `http://localhost:9000` and the cors origin/frontend URL is`http://localhost:3000`, you can change port and cors, put this key into your .env `SERVER_PORT=your-port` and` CORS_ORIGIN=-your-client-origin`

- Step 4: Run project
in your backend `npm run serve` for the start node server and `npm run start` for the frontend

## Packages used
- Tailwindcss
- Headlessui
- React router
- Axios
- UUID
- Joi
- Cors
- Dotenv


## Available Scripts

### npm run start 
- For initiating frontend

### npm run serve 
- For initiating the backend
