# Consulting App

A full-stack web application built with a Django REST Framework backend and a React frontend, designed to showcase consulting services.

## Features

*   **Django Backend:** Provides a RESTful API for data management.
*   **React Frontend (Dashboard):** A modern, interactive user interface for displaying consulting services and information.
*   **Dockerized Deployment:** Both backend and frontend are containerized for easy deployment.
*   **Google Cloud Platform (GCP) Deployment:** Configured for deployment on Google Cloud Run.

## Technologies Used

### Backend
*   **Django:** Web framework for rapid development.
*   **Django REST Framework:** For building robust APIs.
*   **Python 3.12**

### Frontend
*   **React:** JavaScript library for building user interfaces.
*   **Vite:** Fast build tool for modern web projects.
*   **Nginx:** High-performance web server used to serve the React static files in the Docker container.

### Deployment
*   **Docker:** Containerization platform.
*   **Google Cloud Run:** Fully managed compute platform for deploying containerized applications.
*   **Google Container Registry (GCR):** For storing Docker images.

## Local Setup

To run this project locally, follow these steps:

### Prerequisites

*   Python 3.12+
*   Node.js (LTS recommended) & npm
*   Docker Desktop (or Docker Engine)
*   Google Cloud CLI (gcloud) - if you plan to deploy to GCP

### 1. Clone the repository

```bash
git clone https://github.com/Abhi1727/1111educareer.git
cd 1111educareer
```

### 2. Backend Setup (Django)

Navigate to the project root directory.

```bash
# Create a Python virtual environment
python3 -m venv venv

# Activate the virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
# .\venv\Scripts\activate

# Install backend dependencies
pip install -r requirements.txt

# Apply database migrations
python manage.py migrate
```

### 3. Frontend Setup (React)

Navigate to the frontend dashboard directory.

```bash
cd frontend/dashboard

# Install frontend dependencies
npm install
```

## Running Locally

### 1. Start the Backend (Django)

From the project root directory:

```bash
# Activate your virtual environment if not already active
source venv/bin/activate

# Run the Django development server
python manage.py runserver
```
The backend will typically run on `http://127.0.0.1:8000/`.

### 2. Start the Frontend (React)

From the `frontend/dashboard` directory:

```bash
# Start the React development server
npm run dev
```
The frontend will typically run on `http://localhost:5173/` (or another available port).

## Deployment to Google Cloud Platform (GCP)

Both the backend and frontend are configured for deployment to Google Cloud Run.

### Deployment Steps (Summary)

1.  **Ensure Docker is running and `gcloud` CLI is configured** for your GCP project.
2.  **Build and push backend Docker image:**
    ```bash
    # From project root
    docker buildx build --platform linux/amd64 -t gcr.io/YOUR_PROJECT_ID/virenbhai-backend:latest --push .
    ```
3.  **Deploy backend to Cloud Run:**
    ```bash
    gcloud run deploy virenbhai-backend \
      --image gcr.io/YOUR_PROJECT_ID/virenbhai-backend:latest \
      --platform managed \
      --region YOUR_REGION \
      --allow-unauthenticated \
      --port 8000
    ```
4.  **Build and push frontend Docker image:**
    ```bash
    # From frontend/dashboard directory
    npm run build # Ensure the React app is built
    docker buildx build --platform linux/amd64 -f Dockerfile.frontend -t gcr.io/YOUR_PROJECT_ID/virenbhai-frontend:latest --push .
    ```
5.  **Deploy frontend to Cloud Run:**
    ```bash
    gcloud run deploy virenbhai-frontend-app \
      --image gcr.io/YOUR_PROJECT_ID/virenbhai-frontend:latest \
      --platform managed \
      --region YOUR_REGION \
      --allow-unauthenticated \
      --port 80
    ```

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.
