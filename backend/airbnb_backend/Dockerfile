FROM python:3.10-slim

# Set working directory
WORKDIR /usr/src/airbnb_backend

# Environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install system dependencies including netcat-openbsd and sed
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    netcat-openbsd \
    sed

# Upgrade pip and install Python dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application source code
COPY . .

# Copy entrypoint script
COPY entrypoint.sh .

# Make the entrypoint script executable
RUN sed -i 's/\r$//g' /usr/src/airbnb_backend/entrypoint.sh
RUN chmod +x /usr/src/airbnb_backend/entrypoint.sh

# Expose the port your application runs on
EXPOSE 8000

# Run the entrypoint script
ENTRYPOINT ["./entrypoint.sh"]
