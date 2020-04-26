# tybaTest

## How to install it

Actually, the appi can be tested with develop mode following this steps: 
1. Clone this repo
2. npm install to install the libraries
3. Install mongoDB (if you dont have it)
4. run it with 'node index.js'

## How to test it

The api run in localhost:5000, an acept the followings petitions:

  All the crud for users:
    GET, localhost:5001/api/users (retrieve all users created)
    POST localhost:5001/api/users with this data: { name, email, password, age (optional)}
    PUT, PATCH localhost:5001/api/users/:userID { name, email, password, age } (the user id can be found in the get users)
    DELETE localhost:5001/api/users/:userID
    
  Login with an existent user:
    POST localhost:5001/api/login with the data: { email, password }
    This save the user id in the session cookie of the browser
  
  Logout with an existent user:
    POST localhost:5001/api/login with the data: { email, password }
    This clean the session an the cookies in the browser for the user.
