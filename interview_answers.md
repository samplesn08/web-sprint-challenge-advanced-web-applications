# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.<br>
A token is a unique key that is saved on the users local machine and allows them to access to certain areas of a web application that are not accessible to those who do not have an account, such as a user's dashboard or homepage 

2. What steps can you take in your web apps to keep your data secure?<br>
Any pages or components that need to be secure could be rendered under PrivateRoutes, and require an Authentication token in order for the user to be able to see the page rendered

3. Describe how web servers work.<br>
Web servers store data that can be requested by the Client in order to render something to the page.  Web servers hold things like databases, API data, usernames, passwords, or even images and plain text.  Anything that the client needs to render when accessing a page, this data is provided by the web server.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.<br>
C - Create - POST
R - Read - GET
U - Update - PUT
D - Delete - DELETE