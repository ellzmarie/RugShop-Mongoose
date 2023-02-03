#### Rug Shop

This is a full CRUD app in Express with Mongoose. The prequisites are: 

* JavaScript
* Express / Node
* MongoDB / Mongoose

My app has an index page, show page, and an edit & new page that renders forms and submits to the appropriate routes. 

The index page should display: 
* all the products 
* includes image links to the product's show page
* includes a link to add a new product

The show page should display a product with:
* a link back to the index page
* a link to edit the product (goes to the edit page)
* a delete button that deletes the product
* the number of items remaining in stock
The show page also has a BUY button. The BUY button will reduce the number of items in stock by 1 each time it's pressed.

The edit and new pages should submit, render forms and redirect to different pages such as: 
* the create route should redirect to the index
* the delete route should redirect to the index
* the update route will redirect back to the product's show page

