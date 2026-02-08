# Task Manager - Laravel 10 + GraphQL + ReactJS

A modern, full-featured task management application built with Laravel 10, ReactJS, and GraphQL. This application demonstrates a complete CRUD implementation with a modern tech stack.

## 🚀 Features
✅ Full CRUD Operations: Create, Read, Update, Delete tasks

✅ Modern UI: Glassmorphism design with ReactJS

✅ Real-time Updates: Instant data synchronization

✅ Filtering & Search: Filter by status and search tasks

✅ Statistics Dashboard: Visual task metrics

✅ Responsive Design: Works on mobile & desktop

✅ Error Handling: Comprehensive error handling

✅ Loading States: Smooth loading indicators

## 🏗️ Technology Stack
### Backend
- Laravel 10 - PHP Framework
- GraphQL (Lighthouse) - API Layer
- MySQL - Database
- CORS - Cross-origin resource sharing
### Frontend
- ReactJS - UI Library
- Vite - Build Tool & Dev Server
- Apollo Client 3.12 - GraphQL Client
- React Router 7 - Navigation
- Bootstrap 5.3 - CSS Framework
- React Bootstrap - Component Library
### 📋 Prerequisites
Before you begin, ensure you have installed:
- PHP 8.1+
- Composer
- Node.js 18+
- MySQL 8.0+
- Git

## 🛠️ Installation & Setup
1. Clone or Download the Project
```bash
# Create project directory
mkdir ~/Desktop/task-manager-app
cd ~/Desktop/task-manager-app
```

2. Configure Environment
(Edit .env file):
```env
APP_NAME="Task Manager API"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=task_manager
DB_USERNAME=your_user
DB_PASSWORD=your_password

CORS_ALLOWED_ORIGINS=http://localhost:5173
```

3. Install Dependencies
```bash
#Backend
composer update
composer update --no-dev
composer dump-autoload
npm update
npm build
```

4. Generate Application Key
```bash
#Backend
php artisan key:generate
```

5. Run Migrations and Seed
```bash
#Backend
php artisan migrate
php artisan db:seed
```

6. Clear Cache
```bash
#Backend
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
php artisan optimize:clear
php artisan lighthouse:clear-cache
```

7. Frontend Setup (React 19.2 + Vite)
```bash
#Frontend
npm update
npm run build
```

8. 🚀 Running the Application
(Start Backend Server)
```bash
#Backend
php artisan serve --port=8000
```
9. 🚀 Running the Application
(Start Frontend Server)
```bash
#Frontend
npm run dev
npm run build
npm run preview
```

## 🌐 Access URLs

- Frontend Application: http://localhost:5173
- Backend API: http://localhost:8000

## 📁 Project Structure

```
task-manager-app/
├── backend/                    # Laravel 10 + GraphQL
│   ├── app/
│   │   ├── GraphQL/
│   │   │   └── Mutations/
│   │   │       ├── DeleteTask.php
│   │   │       └── ToggleTask.php
│   │   ├── Models/
│   │   │   └── Task.php
│   ├── database/
│   │   ├── migrations/
│   │   │   └── xxxx_create_tasks_table.php
│   │   └── seeders/
│   │       ├── TaskSeeder.php
│   │       └── DatabaseSeeder.php
│   ├── graphql/
│   │   └── schema.graphql
│   └── .env
│
└── frontend/                   # React 19.2 + Vite
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── TaskItem.jsx
    │   │   ├── TaskForm.jsx
    │   │   └── TaskList.jsx
    │   ├── graphql/
    │   │   ├── queries.js
    │   │   └── mutations.js
    │   ├── lib/
    │   │   └── apollo-client.js
    │   ├── styles/
    │   │   └── index.css
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## 🚀 Deployment
### Backend Deployment
- Update .env for production
- Run php artisan config:cache
- Set up web server (Nginx/Apache)
- Configure database credentials

### Frontend Deployment
- Run npm run build
- Deploy dist/ folder to hosting service
- Update API URL in production

### Happy Coding! 🚀