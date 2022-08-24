# Ecommercce-Project
This is an e-commerce website demo. Users can browser the main page, which displays a gallery of products. They can select a particular brand, which will display the list of products sold by that brand. If they click on a product, it navigates them to a page showing more details about that product. If they want purchase products, they can add them to cart. They are able to access their cart page and checkout, which will display an order summary page. There's an admin account that will be in charge of moderating these order requests.

## Technologies
### Backend
Node.js Express Server. The server is organized based on the MVC architecture.

### Frontend
HTML/CSS/JS, template engine

### Database
MongoDB

## Features
### Registration
Users can sign up by providing a unique username, password and unique email.

### Login
Users can log in by user name and password. 
Users can view the home page and product page even if they are nog logoed in.
Users can view their oders, add products to cart and checkout when they are loggin in.
Users are still logged in if they have active session or valide token after refresching page.
Admins account cannot view the regular user home page, add products to cart, checkout or view theire own orders.

### Navigation bar
if not logged in: Home, Cart, My Orders, Sign Up/Login
if logged in: Logout

### Home Page
Users can browse a picture gallery of products. There are previous and next buttons to look through products in a row.
Each brand has its own section and gallery of products.
Clicking a thumbnail navigates the user to a dynamically generated page for that product.

### Product Page
Users will see the same thumbnail and additional information about the product.
Users can click button to add one or more products to cart.
Users can submit product reviews (rating out of 5 and comments).

### Cart Page
Users can see all products currently in their cart alogn with each product's information.
Users can fill out a form to begin the checkout process. This form taks fileds like name, phone number, email, shipping and billing address, payment method, etc.
When users submit order request, they will be informed that the order has been submitted. By default the order status is Pending.
If users log out without placing order and their cart has existing products, this data will persisted and upon the next login, their carts will be repopulated with the same products.

### Orders Page
Users can see their order history and each order's status (Pending, Approved, Rejected)

### Admin Page
Admin logs in and has access to all checkout requests. Admin account can review the order summary before approving or rejecting.
Admin account can view all existing user accounts and their order history.
