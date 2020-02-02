# BYOB

This API was built for developers that are interested in fetching vegan restaurants in different cities around the world.
The restaurants include the name, type of restaurant, and address.

## Created by:
[Amanda Consuelo Sierra](https://github.com/Asilo5)

## Setup on your computer

Clone the repo to your terminal :``` $ git clone https://github.com/Asilo5/byob-csl.git```


Run ``` $ npm install ``` in your terminal

To start your server run ``` $ npm start ```

Make sure that server is running on ``` http://localhost:3001 ```

## What was used to build BYOB

Plant Shop API was built using:
  - Node.js
  - Express
  - Knex
  - PostgreSQL
  
### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/cities` | GET | not needed | Array of all existing cities: `[{"id": 21,"city": "Berlin","avgVegans": "80,000"},...]` |
| `http://localhost:3001/api/v1/restaurants` | GET | not needed | Array of all existing restaurants: `[{"id": 59,"restaurant_id": 21,"name": "Cat Tuong","restaurantType": "Vietnamese vegan cuisine ","address": "Kastanienallee 89, Berlin, Germany, 10435"},...]` |
| `http://localhost:3001/api/v1/cities/:id` | GET | not needed | Array of all existing city: `[{"id": 21,"city": "Berlin","avgVegans": "80,000"}]` |
| `http://localhost:3001/api/v1/restaurants/:id` | GET | not needed | Array of all existing restaurant: `[{"id": 59,"restaurant_id": 21,"name": "Cat Tuong","restaurantType": "Vietnamese vegan cuisine ","address": "Kastanienallee 89, Berlin, Germany, 10435"}]` |
| `http://localhost:3001/api/v1/cities` | POST | `{ city: <String>, avgVegans: <String> }` | New City: `{ city: <String>, avgVegans: <String> }` |
| `http://localhost:3001/api/v1/restaurants` | POST | `{ name: <String>, restaurantType: <String>, address: <String> }` | New Restaurant: `{ name: <String>, restaurantType: <String>, address: <String> }` | 
| `http://localhost:3001/api/v1/restaurants` | DELETE | not needed  | Response: `1` |
