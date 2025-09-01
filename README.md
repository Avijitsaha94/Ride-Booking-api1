#  Ride Booking API

A ride-hailing (Uber/Pathao style) backend API built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.  
This project supports user authentication, driver management, ride booking, and role-based access control.

---

##  Features

-  **Authentication & Authorization**
  - Register/Login with email & password
  - JWT-based authentication
  - Role-based access control (USER, DRIVER, ADMIN, SUPER_ADMIN)

-  **User Management**
  - Register new users
  - Update profile
  - Activate/Deactivate users
  - Admin can view all users

-  **Driver Management**
  - Register drivers
  - Update driver details
  - Approve/Block drivers
  - Admin can manage all drivers

-  **Ride Management**
  - Request ride
  - Accept ride (Driver)
  - Ride status tracking (REQUESTED → ACCEPTED → PICKED_UP → IN_TRANSIT → COMPLETED/CANCELLED)

-  **Validation & Security**
  - Request validation using **Zod**
  - Password hashing with **bcrypt**
  - Protected routes using middleware
  - Error handling with proper responses

##  Tech Stack

- **Backend Framework:** [Express.js](https://expressjs.com/)  
- **Database:** [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)  
- **Validation:** [Zod](https://zod.dev/)  
- **Authentication:** [JWT](https://jwt.io/) + [Passport.js](https://www.passportjs.org/)  
- **Language:** TypeScript  

. Clone the repository

git clone https://github.com/your-username/Ride-Booking-api.git
cd Ride-Booking-api
2. Install dependencies

npm install

3. Run the project

npm run dev
API Endpoints
Auth
POST /api/auth/register → Register new user

POST /api/auth/login → Login and get JWT

Users
GET /api/users/all-users → Get all users (Admin only)

PATCH /api/users/:id → Update user profile

Drivers
POST /api/drivers/register → Register new driver

PATCH /api/drivers/:id → Update driver

GET /api/drivers → Get all drivers (Admin only)

Rides
POST /api/rides/request → Request a new ride

PATCH /api/rides/:id/accept → Accept ride (Driver)

PATCH /api/rides/:id/status → Update ride status

GET /api/rides → Get all rides (Admin/Driver)

Testing with Postman:
You can test all endpoints using Postman:

Import endpoints manually

First register/login to get JWT token

Use JWT in Authorization: Bearer <token> for protected routes

 Deployment:
Vercel 

 Author
Developed by Avijit saha

