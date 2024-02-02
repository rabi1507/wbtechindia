# wbtechindia
Setup and Authentication:
 
Set up a Node.js project with Express.
Integrate JWT-based authentication for user login and registration.
Enhance the authentication process with password hashing using a library like bcrypt.
User and Task Models:
 
Expand the existing User model to include additional fields such as profilePicture, bio, and createdAt etc.
Create a new MongoDB model for Task with fields like title, description, dueDate, and completed.
Implement API endpoints for creating, updating, and deleting tasks associated with a user.
Advanced Querying:
 
Implement API endpoints to retrieve tasks based on different criteria (e.g., tasks due in the next 7 days, completed tasks, etc.).
Utilize MongoDB's querying capabilities for efficient data retrieval.
Middleware:
 
Implement middleware to log requests and responses for debugging purposes.
Create middleware to handle request validation, ensuring that the incoming data is valid before processing.
Pagination and Sorting:
 
Implement pagination for the list of users and tasks to handle large datasets.
Allow users to sort tasks based on various criteria (e.g., due date, creation date).
Transaction Handling:
 
Implement a mechanism to handle transactions when updating multiple documents, ensuring data consistency.
Demonstrate the use of transactions when updating user information and associated tasks.
Real-time Updates:
 
Integrate WebSocket or a similar technology for real-time updates.
Notify users in real-time when a new task is assigned or when an existing task is updated. 
