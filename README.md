# food-app
This is going to be a food delivery app. Users can login to the app using phone numbers. 
Admin can assign orders requested by customers to delivery person. 


# Todo Thingy
1. [X] This app can serve html files now. Earlier the plan was to build api that take and stores data and sends data in json format. 
1. [X] Create a user collection.
1. [X] Customer Collections Should have name, phone number, role [user, admin, delivery person], user id(will be added by default), timestamps
1. [] Order can be done by Customer.
1. [X] Create an item collection where item has name, address array and category

An endpoint from where customer can send
1. [] Signup data /post
1. [] Login data /post
1. [] Order data /post

An endpoint from where admin can

1. [] assign the order to delivery person. /post
1. [] see all orders /get

An endpoint from where delivery person can

1. [] See all orders assigned to him/her