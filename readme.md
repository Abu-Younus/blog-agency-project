# Blog Agency Project

A full-stack blogging platform where users can create, read, update, and delete blogs. This application consists of a **frontend** built with React and Tailwind CSS, and a **backend** built with Express.js and MongoDB.

## Deployment

### Frontend
- Live Link: https://blog-agency-project-fuvi.vercel.app

### Backend
- Live Link: https://blog-agency-project.vercel.app

### Admin Credentials
- Username: Admin
- Password: Admin@1234

## Features

### Frontend
- Built with React and Tailwind CSS.
- Includes dynamic routing using React Router DOM.
- Fully responsive UI with modern design.
- Allows interaction with the backend API.

### Backend
- Built with Express.js and MongoDB.
- Implements security features with **Helmet**, **CORS**, **xss-clean**, and **express-mongo-sanitize**.
- Image upload support using **Cloudinary**.
- Rate limiting to prevent abuse.
- JWT-based authentication for secure API access.

## Installation and Setup

### Prerequisites
- Node.js (>= 16.x)
- npm or yarn
- MongoDB instance (local or Atlas)

### Backend Setup
1. Clone the repository.
   ```bash
   git clone <repo-url>
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following:
   ```env
   PORT=5000
   MONGO_URL=<your-mongo-db-url>
   CLIENT_URL=http://localhost:5173
   JWT_SECRET=<your-secret-key>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit `http://localhost:5173`.

## API Endpoints

### Base URL
`http://localhost:5000/api/v1`

### Public Routes
- **Admin Login**: `POST /login`
- **Get All Blogs**: `GET /blogs`
- **Get All Services**: `GET /services`
- **Get All Members**: `GET /members/`
- **Contact Mail Send**: `POST /contact-mail`

### Admin Dashboard Route
- **Dashboard**: `GET /admin`

### Admin Blog Routes
- **Create Blog**: `POST /admin/blogs`
- **Get All Blogs**: `GET /admin/blogs`
- **Get Single Blog**: `GET /admin/blogs/:id`
- **Update Blog**: `PUT /admin/blogs/:id`
- **Delete Blog**: `DELETE /admin/blogs/:id`

### Admin Service Routes
- **Create Service**: `POST /admin/services`
- **Get All Services**: `GET /admin/services`
- **Get Single Service**: `GET /admin/services/:id`
- **Update Service**: `PUT /admin/services/:id`
- **Delete Service**: `DELETE /admin/services/:id`

### Admin Members Routes
- **Create Member**: `POST /admin/members`
- **Get All Members**: `GET /admin/members`
- **Get Single Member**: `GET /admin/members/:id`
- **Update Member**: `PUT /admin/members/:id`
- **Delete Member**: `DELETE /admin/members/:id`

## License
This project is licensed under the **MIT License**.

## Author
**Md. Abu Younus**
