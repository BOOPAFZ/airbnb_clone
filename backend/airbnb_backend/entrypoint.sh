#!/bin/sh

if [ "$DATABASE" = "postgres" ]; then
    echo "Checking if database is running..."

    while ! nc -z "$SQL_HOST" "$SQL_PORT"; do
        echo "Waiting for the database..."
        sleep 1
    done

    echo "Database is up and running!"
fi

# Run Django commands
python manage.py makemigrations
python manage.py migrate
exec python manage.py runserver 0.0.0.0:8000


