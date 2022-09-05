# Social Network API

This is the social network api. A backend service utilizing MongoDB and mongoose to create users, thoughts, reactions and friendships!

## Requirements

To use this code, you must have mongoDB running on your machine.

## How to Use:

The following are all the API routes and http requests that can be made with this api:

/api/users<br>
    GET - gets all users<br>
    POST - post a new user<br>
        example JSON:<br>
        {<br>
            "username": "lernantino",<br>
            "email": "lernantino@gmail.com"<br>
        }<br>

/api/users/:userId<br>
    GET - a single user by its ID<br>
    PUT - Update a user bu its ID<br>
    DELETE - delete a user by its ID<br>

/api/users/:userId/friends/:friendId<br>
    POST - Adds user with a user Id of friendId to user with User id of userId's friend list<br>
    DELETE - Deletes user with a user Id of friendId from user with user Id of userId's friend list<br>

/api/thoughts<br>
    GET - Get all thoughts<br>
    POST - Add a new thought<br>
        example JSON:<br>
        {<br>
            "thoughtText": "This is the thought",<br>
            "username": "Lernantino",<br>
            "userId": "5e6f537388fhh374"<br>
        }<br>

/api/thoughts/:thoughtId<br>
    GET - Get a single thought by it's ID<br>
    PUT - Update a single thought by it's ID<br>

api/thoughts/:userId/:thoughtId<br>
    DELETE - remove a thought by it's ID and the user who posted it's ID<br>

api/thoughts/:thoughtId/reactions<br>
    POST - Post a reaction to a user's thought<br>
        example JSON<br>
        {<br>
            "reactionBody": "This is my reaction",<br>
            "username": "becca"<br>
        }

api/thoughts/:thoughtId/reactions/:reactionId<br>
    DELETE - deletes a reaction by its reactionId<br>

## Video Walkthrough

Here is a link to a video showing how all these routes work using insomnia.
https://drive.google.com/file/d/1dTnAik3Rhq_AvlNHIREKqfRYyFqqKvCo/view