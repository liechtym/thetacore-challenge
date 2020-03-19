kill -9 $(lsof -t -i:8081)
kill -9 $(lsof -t -i:3006)
npm start & python3 experts/manage.py runserver 8081