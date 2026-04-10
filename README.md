# express-auth-system
A robust Node.js and Express authentication backend featuring JWT-based login, password hashing with Bcrypt, and email verification via Nodemailer/Mailtrap.




# Secure Auth Backend 🔐

A complete authentication system built with **Node.js**, **Express**, and **MongoDB**. This project handles user registration, secure password storage, email verification, and JWT-based session management.

## 🚀 Features
* **User Registration:** Securely hashes passwords using `bcryptjs`.
* **Email Verification:** Sends automated verification links via `nodemailer`.
* **JWT Authentication:** Issues JSON Web Tokens for secure login sessions.
* **Cookie Integration:** Stores tokens in HTTP-only cookies for enhanced security.
* **CORS Enabled:** Configured for cross-origin requests.

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (via Mongoose)
* **Authentication:** JWT (jsonwebtoken)
* **Email:** Mailtrap / Nodemailer

## 📋 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/v1/users/register` | Register a new user & send verification email |
| GET | `/api/v1/users/verify/:token` | Verify user email via token |
| POST | `/api/v1/users/login` | Authenticate user and issue cookie/token |

