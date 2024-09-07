

```md
# 🛒 Stripe Payment Integration Demo

A small project to learn Stripe payment integration with a simple product listing, cart functionality, and Stripe checkout. The front-end is built using **React** (Vite) and the back-end is powered by **Node.js**.

---

## 🔥 Features

- 🛍️ **Product Listing**: View a list of products
- ➕ **Add to Cart**: Add products to the cart
- 💳 **Stripe Checkout**: Seamless payment using Stripe

---

## 🛠️ Technologies Used

### Frontend:
- ⚛️ **React** (Vite)
- 🎨 **CSS** and **Tailwind CSS**

### Backend:
- 🟢 **Node.js**
- ⚡ **Express.js**
- 💾 **MongoDB** (optional for product storage)
- 💳 **Stripe** for payment processing

---

## 📦 Installation

### 1. Clone the repository:
```bash
git clone https://github.com/mskcmd/stripe-payment-integration.git

### 2. Navigate to the project folder:
```bash
cd stripe
```

### 3. Install dependencies for both front-end and back-end:

#### Frontend Setup:
```bash
cd frontend
npm install
```

#### Backend Setup:
```bash
cd backend
npm install
```

---

## 🚀 Usage

### Frontend (React Vite):

To start the development server, navigate to the `frontend` folder and run:
```bash
npm run dev
```
The development server will start at **http://localhost:5173**.

### Backend (Node.js):

To start the backend server, navigate to the `backend` folder and run:
```bash
npm start
```
The server will start at **http://localhost:4000**.


---

## 🌐 API Endpoints

- **GET /api/products**: Fetch product list
- **POST /api/create-checkout-session**: Create Stripe checkout session
- **POST /webhook**: Stripe webhook endpoint for handling events

---

## 🔑 Environment Variables

Create a `.env` file in both frontend and backend directories with the following values:

### Backend `.env`:
```env
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXX
PORT=4000
```

---

## 💡 License

This project is open-source and available under the [MIT License](LICENSE).

---

### 💻 Developed By: [Muhammed Suhail](https://my-portfoliosuhail-mskcmds-projects.vercel.app)

```
