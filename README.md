# ✂️ Cut & Comb 💈  

**Cut & Comb** is a multi-vendor barber shop platform built with the MERN stack. This platform allows barbers to register their shops, customers to find and book services, and includes real-time communication between customers, barbers, and the super admin. Key features include email verification, secure authentication, role-based access control, and a super admin dashboard for monitoring and managing the platform.  

---

## ✨ Features  

### 🧑‍🎨 For Barbers  
- **Shop Registration**:  
  Barbers can sign up and register their shops with details such as location, services offered, and pricing.  
- **Manage Services**:  
  Add, update, or remove services provided.  
- **View Bookings**:  
  Keep track of customer appointments and manage schedules effectively.  
- **Communicate with Super Admin**:  
  Use real-time messaging to reach out to the super admin for support.  

### 👥 For Customers  
- **Shop Discovery**:  
  Search for barber shops nearby or based on specific preferences.  
- **Booking Services**:  
  Book appointments with barbers directly through the platform.  
- **Ratings and Reviews**:  
  Leave feedback for barber shops and services received.  
- **Real-Time Communication**:  
  Chat directly with shopkeepers for inquiries or appointment confirmations.  

### 🚀 Platform Features  
- **📧 Email Verification**:  
  Ensure secure user accounts with email-based verification during sign-up.  
- **🔒 Authentication**:  
  Secure login and sign-up using JWT (JSON Web Token).  
- **👨‍💼 Role-Based Access Control**:  
  Different roles for barbers, customers, and super admin. Each role has distinct privileges.  
- **📊 Super Admin Dashboard**:  
  Monitor all activities, manage users, and oversee platform operations.  
- **💬 Real-Time Messaging**:  
  Powered by Socket.IO for instant communication between customers, barbers, and the super admin.  

---

## 🛠️ Tech Stack  

### 🌐 Frontend  
- **React.js**: For building the user interface and interactive components.  
- **Tailwind CSS**: For modern and responsive styling.  
- **Redux Toolkit**: For state management.  

### ⚙️ Backend  
- **Node.js**: For building the server-side functionality.  
- **Express.js**: As the web application framework.  

### 💾 Database  
- **MongoDB**: For storing all platform data, including user information, shops, and bookings.  

### 📦 Other Tools & Libraries  
- **Socket.IO**: For real-time communication.  
- **JWT (JSON Web Tokens)**: For secure authentication and role-based access.  
- **Nodemailer**: For sending email verifications.  
- **Stripe and PayPal APIs**: For payment processing.  

---

## 📦 Dependencies  

### Frontend  
```json
{
  "@material-ui/core": "^4.12.4",
  "@material-ui/data-grid": "^4.0.0-alpha.37",
  "@paypal/react-paypal-js": "^7.8.3",
  "@reduxjs/toolkit": "^1.9.3",
  "@stripe/react-stripe-js": "^2.1.0",
  "@stripe/stripe-js": "^1.52.1",
  "axios": "^1.3.4",
  "country-state-city": "^3.1.2",
  "js-cookie": "^3.0.1",
  "react": "^18.2.0",
  "react-icons": "^4.7.1",
  "react-lottie": "^1.2.3",
  "react-redux": "^8.0.5",
  "react-router-dom": "^6.8.2",
  "react-toastify": "^9.1.1",
  "redux-thunk": "^2.4.2",
  "socket.io-client": "^4.6.1",
  "timeago.js": "^4.0.2"
}
```

### Backend  
```json
{
  "bcrypt": "^5.1.0",
  "cors": "^2.8.5",
  "dotenv": "^16.0.3",
  "express": "^4.18.2",
  "js-cookie": "^3.0.1",
  "jsonwebtoken": "^9.0.0",
  "mongoose": "^7.0.0",
  "multer": "^1.4.5-lts.1",
  "nodemailer": "^6.9.1",
  "socket.io": "^4.6.1",
  "stripe": "^12.0.0"
}
```

---

## 📸 Screenshots  
<img src="/gh-assets/barber.png" alt="Cut & Comb" width="50%">
 

---

## 🔧 Getting Started  

1. Clone the repository:  
   ```bash
   git clone https://github.com/sudoyasir/multi-vendor-barber-shop
   cd multi-vendor-barber-shop
   ```

2. Install dependencies for both frontend and backend:  
   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   
   # Socket
   cd ../socket
   npm install
   ```

3. Configure environment variables:  
   - Create a `.env` file in the backend directory with the following:  
     ```
     DB_URL=
ACTIVATION_SECRET=
JWT_SECRET_KEY=
STRIPE_API_KEY=
STRIPE_SECRET_KEY=
SMTP_HOST=
SMTP_PORT=
SMTP_SERVICE=
SMTP_MAIL=
SMTP_PASSWORD=

     ```

4. Run the application:  
   ```bash
   # Backend
   cd backend
   npm start

   # Frontend
   cd frontend
   npm start
   
   # Socket
   cd socket
   npm start
   ```

5. Access the application at `http://localhost:3000`.  

---

## 📬 Contact  

- **Name**: Yasir Nawaz
- **Portfolio**: [yasirnawaz.me](https://yasirnawaz.me) 
- **Email**: [y451rmahar@gmail.com](mailto:y451rmahar@gmail.com)  
- **GitHub**: [@sudoyasir](https://github.com/sudoyasir)  
- **LinkedIn**: [Yasir N.](https://linkedin.com/in/sudoyasir)  

Feel free to reach out for any inquiries or collaboration opportunities! 😊  


Let me know if you want any further customization! 🚀