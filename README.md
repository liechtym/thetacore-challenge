### Thetacore Challenge 7 Hour Mark

At the 5 hour mark, I had created the database, backend, frontend, and was listing the "experts" in the UI.

#### Updates Since 5 Hour Mark:
- Figured out how to complete a POST in the database and created an endpoint for experts to be submitted
- Updated the UI to add elements for submitting experts to the database
- Added Bootstrap styles to the page

#### I acknowledge that the following are not present because of time constraints:
- There are no tests
- Error handling is not implemented besides a basic check when data is posted to the database

### Setup

`npm-install`

All Python dependencies are installed in a `Python 3.7.7` virtual environment that is zipped in the primary directory. 

The set up with the front end and the back end uses two servers. Thus, I have created a bash script `./start_env` that will set both up. They are configured to work together.

Once you have run this, open http://localhost:3006/ (I used an obscure port so there wouldn't be a conflict). There you can see a listing of experts in the database (assuming you have configured your database and added experts).

The backend admin can be accessed here once you've run the shell script above: http://localhost:8081/admin
