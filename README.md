# Shopping

## Overview
### Description
A fullstack web application that displays a list of products and returns the desired ones based on the input query retrieving from the search bar 

### Tech Stack
- ReactJS
- Express
- MongoDB

## Product Spec
### User Stories
* [x] As a user I should be able to search the products
* [x] As a user I should be able to filter the products based on their category
* [ ] As a user I should be able to login on the website
* [ ] As a user I should be able to add products to their shopping cart

### Merchant Stories
* [x] As a merchant I should be able to ADD new products into the database
* [x] As a merchant I should be able to EDIT product's properties
* [x] As a merchant I should be able to DELETE new products from the database
* [x] As a merchant I should be able to store users' informations into the database


## Schema
### Models
#### Product
| Property      | Type     | Description |
| ------------- | -------- | ------------|
| id      | String   | MongoDB's ObjectID  |
| title      | String   | product's name  |
| image         | String     | url |
| price      | String   | product's price  |
| category      | String   | product's category  |



#### User
| Property      | Type     | Description |
| ------------- | -------- | ------------|
| id      | String   | MongoDB's ObjectID  |
| username      | String   | user's preferred name  |
| name         | String     | user's name |
| passwordHash      | String   | user's encrypted password  |


### Walkthrough 
![](shopping-app.gif)

