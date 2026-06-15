# TaskFlow

TaskFlow is a full-stack task management application with JWT authentication, CRUD task operations, search/filter, and a statistics dashboard.

## Tech Stack

- **Frontend:** React.js (Vite)
- **Backend:** Node.js + Express.js
- **Database:** MongoDB
- **Authentication:** JWT + bcrypt

## Project Structure

```
TaskFlow/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
└── frontend/
    └── src/
```

## Prerequisites

- Node.js 18+
- MongoDB running locally on `mongodb://127.0.0.1:27017`

## Setup

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:5001`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`

## API Endpoints

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`

### Tasks (JWT protected)

- `GET /api/tasks` — search (`?search=`), filter by status/priority
- `GET /api/tasks/stats`
- `GET /api/tasks/:id`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

## Sample Register Request

```json
{
  "name": "Nitu Rajput",
  "email": "nitu@gmail.com",
  "password": "nitu@123"
}
```

## Sample Login Request

```json
{
  "email": "nitu@gmail.com",
  "password": "nitu@123"
}
```
