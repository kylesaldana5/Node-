## Instructions

You have decided to finally pursue your life long dream of becoming a baker. After renting a space near the local town square, buying all necessary equipment, and hiring your younger sibling to work for you, the bakery is ready to open. Unfortunately, there isn't much money left, so you decide to build a simple website on your own. You have decided on the following, minimal features:


1. A home page that displays the bakery's name, a picture and a short bio.

1. An about page with a bio of yourself and the company's slogan.

1. An inventory page which would list the most popular pastries along with their prices.

1. A simple nav bar which does not display a link to the current page, but only the pages not being viewed.

  e.g: If the URL is currently `localhost:8080/about` only `Home` and `Inventory` links should be shown.


## Requirements

1. Set up a simple Express server with three routes; `/`, `/about` and `/inventory`. Each route should render the corresponding pug file.

1. Be sure to set Express' view engine to use Pug.

1. Using the `include` keyword, insert the nav.pug partial into each of the pug files.

1. In `about.pug`, create a variable to store the current date and time using the JavaScript `Date()` method. Using Pug's string interpolation, insert the date variable into a paragraph tag which should read: `Today's date is Sun Feb 19 2017 14:36:06 GMT-0600 (CST).`;

1. In `server.js`, create a variable that stores an array of at least 5 objects. Each object should contain a name and a price for a pastry. Using the `res.render()` method, send the array to the template. Using Pug's iteration methods, display each pastry as a single paragraph tag, e.g: `Blueberry Muffin: 1.59 each`

1. Using Pug's conditional syntax in `nav.pug`, write logic to determine which page is currently being displayed and only render the pages which are not being viewed.