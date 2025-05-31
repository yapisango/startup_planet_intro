# 🌍 Startup Planet API

**Startup Planet** is a Node.js Express API that provides access to a curated dataset of tech startups from around the world. It supports filtering by key parameters and is built with a modular, scalable structure using Express Router and controller logic separation.

---

## 🚀 Features

- 🔍 Filter startups by `industry`, `country`, `continent`, `is_seeking_funding`, and `has_mvp`
- 🌐 Dynamic path-based filtering (e.g. `/api/country/India`)
- ⚠️ Graceful 404 handler for unknown routes
- 🧱 Modular code structure using Express Router and controllers
- 🌱 Easily extendable for future functionality

---

## 🗂 Project Structure

startup_planet_intro/
│
├── controllers/
│ ├── getDataByQueryParams.js # Handles filtering via query parameters
│ └── getDataByPathParams.js # Handles filtering via dynamic URL segments
│
├── routes/
│ └── apiRoutes.js # All /api related routes
│
├── data/
│ └── data.js # Static startup dataset
│
├── server.js # Entry point of the Express server
└── package.json


---

## 🔧 Installation & Usage

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sangoyapi/startup_planet_intro.git
   cd startup_planet_intro

Install dependencies:

npm install

The server will run on http://localhost:8000.
🔍 API Endpoints
GET /api
Filter startups by query parameters:

Example:
    /api?industry=AI&country=USA&is_seeking_funding=true

Available query params:

industry

country

continent

is_seeking_funding (true/false)

has_mvp (true/false)

GET /api/:field/:term
Path-based filtering by one of these fields: country, continent, industry

Example:
    /api/country/India

❌ Invalid Routes
Requests to unknown routes return:
{
  "message": "Endpoint not found. Please check the API documentation."
}
With HTTP status: 404 Not Found

📚 Future Enhancements
🔐 Add authentication

🧠 Support fuzzy search and keyword matching

🗃 Connect to a real database

💬 Add Swagger or Postman documentation

🧑‍💻 Author
Sango Mabhuti Yapi
Frontend Developer | Chemistry & Computer Science Grad

📄 License
This project is licensed under the MIT License.