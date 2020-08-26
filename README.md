# README
## IdeaBooster
IdeaBooster is a Kickstarter clone which allows users to post their projects or ideas and raise money to achieve their final funding goals. 

Live site: https://idea-booster.herokuapp.com/

This site was created by following technologies:
Frontend: Redux, React, Javascript
Backend: Ruby on rails 
Database: Postgres
API: AWS S3

Main Features:
1. Encrypted password digests and ensured valid accounts by employing ActiveRecord validations with Rails in order to prevent plain-text form of passwords and also to achieve data security.

2. Connected Rails backend to AWS S3 to host all project images in order to reduce page load and improve server performance, ensuring content security with AWS IAM.

3. Used AJAX request in the frontend to RESTful APIs to achieve project CRUD data manipulation through the backend server which greatly improved the request data performance.

4. Built a dynamic search function to classify data either by its title name or its category.





