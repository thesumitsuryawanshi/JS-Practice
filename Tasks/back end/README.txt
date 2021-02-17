Create a REST API using express.

The API will have the following endpoints:

`GET /message`
Will return a list of all messages 


`GET /message/:id`
Will return the message specified with the id


`POST /message`
Will add a new message to the persistent data.

`PUT /message/:id`
Will update message specified with the id


A Message object will have the following data:
1. id - A unique identifier for each message
2. createdOn - the timestamp when the message was created
3. updatedOn - the timestamp when the message was last updated 
4. text - The text in the message 


We want you to save the data in your own JSON file locally. (That means no database, no firebase... but a simple json file living locally).

That means, somewhere on your local system, your code should create it's own JSON file for storing all the data. (We understand that this isn't a best practice).


You can write your code in Express or Koa or any other Node.js framework that you're comfortable with. 

The code will be evaluated primarily on coding standards (Hint: You can use a lint to make it easier for yourself) and how much scale did you consider in your code.

For example, we may add more routes and endpoints later, may add more models, may want to test it with millions of records tomorrow. Can your code sustain these changes without a need of major rewrite?

Once you're done, you can push your code to Github.
Keep your code in a private repository and share the access with aman@uxgorilla.com and akshat@uxgorilla.com.

We’ll review and respond to every submission done by 11:59PM, 17th Feb 2021 IST.


For any queries, send an email to hello@uxgorilla.com

Happy Coding!