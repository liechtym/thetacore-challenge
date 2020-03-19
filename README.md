### Thetacore Challenge 5 Hour Mark

Due to spending a lot of time setting up PostgreSQL (it was my first time), I only got to listing the experts. I will be making a 6-7 hour version just to show that I can do more, just ran out of time.

### Setup

`npm-install`

All Python dependencies are installed in a `Python 3.7.7` virtual environment that is zipped in the primary directory. 

The set up with the front end and the back end uses two servers. Thus, I have created a bash script `./start_env` that will set both up. They are configured to work together.

Once you have run this, open http://localhost:3006/ (I used an obscure port so there wouldn't be a conflict). There you can see a listing of experts in the database (assuming you have configured your database and added experts).

The backend admin can be accessed here once you've run the shell script above: http://localhost:8081/admin
