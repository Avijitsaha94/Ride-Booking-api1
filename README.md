# 🚖 Ride Booking API

A **ride-hailing backend API** (similar to Uber/Pathao) built with **Node.js, Express, MongoDB, and TypeScript**.  
It provides user authentication, driver management, ride booking, and role-based access control.

---

## 📌 Project Overview

The **Ride Booking API** allows users to request rides, drivers to accept them, and admins to manage the overall system.  
It is designed with scalability, modularity, and security in mind:

- **Users** can register, login, and book rides.
- **Drivers** can register, update their status, and accept rides.
- **Admins** can manage users, drivers, and rides.
- **JWT authentication** secures protected routes.
- **Zod validation** ensures clean request data.
- **Role-based access control** prevents unauthorized access.

---

## ⚙️ Setup & Environment Instructions

### 1️⃣ Clone the repository
git clone https://github.com/your-username/ride-booking-api.git
cd ride-booking-api
2️⃣ Install dependencies

npm install
3️⃣ Create .env file in root directory
env

PORT=5000
DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/ridebooking
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_ACCESS_EXPIRES=1d
JWT_REFRESH_EXPIRES=7d
BCRYPT_SALT=10
4️⃣ Run the development server

npm run dev
Server will start at:
👉 http://localhost:5000

📡 API Endpoints Summary
🔑 Authentication
Method	Endpoint	Description	Auth Required
POST	/api/auth/register	Register new user	❌
POST	/api/auth/login	Login & get JWT tokens	❌
POST	/api/auth/refresh	Refresh access token	❌

Example Request (Register User)


POST /api/auth/register
{
  "name": "Avijit Saha",
  "email": "avijit@example.com",
  "password": "secret123",
  "role": "USER"
}
Example Response


{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": "64f1e1c6c0a123",
    "email": "avijit@example.com",
    "role": "USER"
  }
}
👤 Users
Method	Endpoint	Description	Auth Required
GET	/api/users/all-users	Get all users (Admin only)	✅ (Admin)
PATCH	/api/users/:id	Update user profile	✅ (User/Admin)

Example Request (Update User)


PATCH /api/users/64f1e1c6c0a123
Authorization: Bearer <token>
{
  "name": "Avijit Updated",
  "phone": "017XXXXXXXX"
}
Example Response


{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": "64f1e1c6c0a123",
    "name": "Avijit Updated",
    "phone": "017XXXXXXXX"
  }
}
🚗 Drivers
Method	Endpoint	Description	Auth Required
POST	/api/drivers/register	Register new driver	❌
GET	/api/drivers	Get all drivers (Admin)	✅ (Admin)
PATCH	/api/drivers/:id	Update driver details	✅ (Driver/Admin)

Example Request (Register Driver)


POST /api/drivers/register
{
  "name": "Rahim Driver",
  "email": "rahim@example.com",
  "password": "driver123",
  "licenseNumber": "DL-12345"
}
🛺 Rides
Method	Endpoint	Description	Auth Required
POST	/api/rides/request	Request a new ride (User)	✅ (User)
PATCH	/api/rides/:id/accept	Accept ride (Driver)	✅ (Driver)
PATCH	/api/rides/:id/status	Update ride status	✅ (Driver/Admin)
GET	/api/rides	Get all rides (Admin/Driver)	✅

Example Request (Request Ride)


POST /api/rides/request
Authorization: Bearer <user_token>
{
  "pickupLocation": "Banani, Dhaka",
  "dropoffLocation": "Dhanmondi, Dhaka"
}
Example Response


{
  "success": true,
  "message": "Ride requested successfully",
  "data": {
    "id": "64f1f8a7c0d456",
    "status": "REQUESTED",
    "pickupLocation": "Banani, Dhaka",
    "dropoffLocation": "Dhanmondi, Dhaka"
  }
}
✅ Testing with Postman
Register or login to get JWT token.

Copy token and set in Authorization: Bearer <token>.

Test protected routes with proper roles.

🚀 Deployment
You can deploy this project on Vercel, Render, Railway, or Heroku.
Don’t forget to set environment variables in hosting platform.

👨‍💻 Author
Developed by Avijit Saha.
