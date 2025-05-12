#  Xeno CRM Backend

The backend is built using **Node.js** with **Express.js** and connected to **MongoDB Atlas**. It provides REST APIs for creating campaigns, storing customer/order data, generating AI-powered marketing messages, and tracking delivery performance.

---

##  Project Objective

To provide a simple and scalable backend that:
- Accepts and stores campaign data.
- Applies customer segmentation rules.
- Sends messages using AI assistance.
- Simulates delivery outcomes.
- Tracks campaign performance.

---

##  Technologies Used

| Purpose       | Tech Stack              |
|---------------|--------------------------|
| Server        | Node.js, Express.js      |
| Database      | MongoDB Atlas + Mongoose |
| Environment   | dotenv                   |
| AI Messaging  | Together AI / OpenAI API |
| HTTP Requests | Axios                    |
| CORS Support  | cors                     |

## 📦 Getting Started

### 1. Clone the repository


git clone https://github.com/krishnavamsimudigonda/xeno-crm-backend.git
cd xeno-crm-backend
npm install

### 2. Create a .env file

MONGO_URI=your_mongodb_connection_string
TOGETHER_API_KEY=your_together_ai_or_openai_key

## 3. Run the server
npm run dev

API now runs at: http://localhost:5000
