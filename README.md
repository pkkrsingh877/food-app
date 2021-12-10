# food-app
This is going to be a food delivery app. Users can login to the app using phone numbers. 
Admin can assign orders requested by customers to delivery person. 


# Todo Thingy

1. [] Create a database with user collections.
1. [] Customer Collections Should have name, phone number, role [user, admin, delivery person], user id, timestamps
1. [] Order can be done by Customer.

An endpoint from where customer can send
1. [] Signup data /post
1. [] Login data /post
1. [] Order data /post

An endpoint from where admin can

1. [] assign the order to delivery person. /post
1. [] see all orders /get

An endpoint from where delivery person can

1. [] See all orders assigned to him/her