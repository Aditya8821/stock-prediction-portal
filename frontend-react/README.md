# Stock Prediction Portal

A full-stack web application for stock price prediction using machine learning. The project consists of a React frontend built with Vite and a Django REST Framework backend.

## 🚀 Features

- **Real-time Stock Data**: Fetch and display current stock prices
- **ML Predictions**: Machine learning-powered stock price predictions
- **User Authentication**: Secure user registration and login system
- **Interactive Dashboard**: Modern and responsive user interface
- **API Integration**: RESTful API for seamless data communication

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **FontAwesome** - Icon library for UI components

### Backend
- **Django 5.0.6** - Python web framework
- **Django REST Framework** - Toolkit for building Web APIs
- **JWT Authentication** - Secure token-based authentication
- **CORS Headers** - Cross-Origin Resource Sharing support
- **SQLite** - Default database (can be configured for other databases)

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Python** (v3.8 or higher)
- **pip** (Python package installer)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Stock-prediction-portal
```

### 2. Backend Setup (Django)

1. **Navigate to the backend directory:**
   ```bash
   cd backend-drf
   ```

2. **Create and activate a virtual environment:**
   ```bash
   # Windows
   python -m venv env
   env\Scripts\activate

   # macOS/Linux
   python3 -m venv env
   source env/bin/activate
   ```

3. **Install Python dependencies:**
   ```bash
   pip install django djangorestframework django-cors-headers python-decouple djangorestframework-simplejwt
   ```

4. **Set up environment variables:**
   - Create a `.env` file in the `backend-drf` directory
   - Add your configuration (SECRET_KEY, DEBUG, etc.)

5. **Run database migrations:**
   ```bash
   python manage.py migrate
   ```

6. **Create a superuser (optional):**
   ```bash
   python manage.py createsuperuser
   ```

7. **Start the Django development server:**
   ```bash
   python manage.py runserver
   ```
   
   The backend API will be available at `http://127.0.0.1:8000/`

### 3. Frontend Setup (React)

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend-react
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The frontend application will be available at `http://localhost:5173/`

## 🔧 Development Workflow

1. **Start the backend server:**
   ```bash
   cd backend-drf
   python manage.py runserver
   ```

2. **In a new terminal, start the frontend server:**
   ```bash
   cd frontend-react
   npm run dev
   ```

3. **Access the application:**
   - Frontend: `http://localhost:5173/`
   - Backend API: `http://127.0.0.1:8000/`
   - Django Admin: `http://127.0.0.1:8000/admin/`

## 📁 Project Structure

```
Stock-prediction-portal/
├── backend-drf/                 # Django backend
│   ├── accounts/               # User authentication app
│   ├── api/                    # Main API app
│   ├── stock_prediction_main/  # Django project settings
│   ├── manage.py              # Django management script
│   └── db.sqlite3             # SQLite database
├── frontend-react/             # React frontend
│   ├── src/                   # Source code
│   ├── public/                # Static assets
│   ├── package.json           # Node.js dependencies
│   └── vite.config.js         # Vite configuration
└── README.md                  # Project documentation
```

## 🔐 Environment Variables

Create a `.env` file in the `backend-drf` directory with the following variables:

```env
SECRET_KEY=your-secret-key-here
DEBUG=True
```

## 🚀 Deployment

### Frontend Deployment
```bash
cd frontend-react
npm run build
# Deploy the dist/ folder to your hosting service
```

### Backend Deployment
- Configure your production database
- Set `DEBUG=False` in production
- Configure static files serving
- Set up proper environment variables

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.