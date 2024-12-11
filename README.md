# **DevTree**

**My Links** is a full-stack application that allows you to manage users, authenticate using JWT, and upload images to the cloud with Cloudinary. It is built with a Node.js (Express) backend and a React (TypeScript) frontend, with MongoDB as the database.

## **Features**

- **Backend**:
- RESTful API built with Node.js and Express.
- Authentication using JWT.
- User and data storage using MongoDB (Mongoose).
- Image upload to Cloudinary.
- Middleware to protect routes with JWT.

## **Project Structure**

### **Backend**
- **index.js**: Main server file.
- **/src/models**: Data models (User, etc.).
- **/src/routes**: API routes (authentication, user, etc.).
- **/src/controllers**: Logic to handle requests.
- **/src/middleware**: Middleware for authentication and validation.
- **/src/config**: Configuration files (MongoDB, Cloudinary, etc.).

## **Installation**

### **Prerequisites**

1. Have **Node.js** and **npm** installed.
2. Have an account on **MongoDB** and **Cloudinary** for database configurations and image management.

#### **Backend**

1. Clone the repository:
```bash
git clone <repository-url>
cd backend
