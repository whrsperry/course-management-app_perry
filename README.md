# Course Management Application README

This README provides instructions on how to set up and run the Course Management Application locally. The application consists of a Node.js Express backend with a MySQL database and a React frontend. Follow the steps below to ensure a smooth setup.

## Backend Setup:

### 1. Prerequisites:
- Node.js installed ([Download Node.js](https://nodejs.org/))
- MySQL installed ([Download MySQL](https://dev.mysql.com/downloads/))

### 2. Database Setup:
- Create a MySQL database named `test`.
- Execute the following SQL query to create the `course` table:

```sql
CREATE TABLE `course` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255),
  `creator` varchar(255) NOT NULL,
  `lessons` int NOT NULL,
  `duration` int NOT NULL,
  `level` varchar(50) NOT NULL,
  `price` int NOT NULL,
  `language` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

# Backend Configuration:

### 1. Open the backend/index.js file:
 - Navigate to the backend directory.
 - Open the index.js file.
 - Update the MySQL connection details in the db object with your MySQL credentials.
  
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "*put your password here*",
    database: "test"
  });

- If there is an authentication problem, execute the following query in your MySQL database:
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '*putyourpasswordhere*';

### 2. Install Dependencies and Run Backend:

- Open a terminal in the backend directory.
- Run the following commands:

npm install
npm start

- The backend will be running at http://localhost:8800.

# Frontend Setup:

### 1. Install Dependencies and Run Frontend: 
- Open a terminal in the frontend directory.
- Run the following commands:

npm install
npm start

- The frontend will be running at http://localhost:3000.

# Application Usage:

- Open your web browser and go to http://localhost:3000 to access the Course Management Application.
- Explore courses, add new courses, view course details, update courses, and delete courses as needed.