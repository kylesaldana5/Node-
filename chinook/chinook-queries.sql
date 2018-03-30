1. Provide a query showing Customers (just their full names, customer ID and country) who are not in the US.
SELECT *
FROM Customer
WHERE country != 'USA'

2. Provide a query only showing the Customers from Brazil.
SELECT * 
FROM Customer
WHERE Country = "Brazil"

3. Provide a query showing the Invoices of customers who are from Brazil. The resultant table should show the customers full name, Invoice ID, Date of the invoice and billing country.
SELECT c.FirstName 'First Name', c.LastName 'Last Name', i.InvoiceID 'Invoice ID', i.InvoiceDate'Date', i.BillingCountry 'Billing'
FROM Customer c
JOIN Invoice i
ON c.CustomerID = i.customerID
WHERE Country = "Brazil"

4. Provide a query showing only the Employees who are Sales Agents.
SELECT Employees
FROM Employees
WHERE Employees.Title = 'Sales Agents'

5. Provide a query showing a unique list of billing countries from the Invoice table.
SELECT BillingCountry
FROM Invoice
GROUP BY BillingCountry

6. Provide a query that shows the invoices associated with each sales agent. The resultant table should include the Sales Agents full name.
SELECT e.FirstName, e.LastName, i.InvoiceID, c.CustomerID
FROM Employees e
JOIN Customer c
ON e.EmployeeID = c.SupportRepID
JOIN Invoice i 
ON i.CustomerID = c.CustomerID
WHERE e.Title = "Sales Support Agent"
7. Provide a query that shows the Invoice Total, Customer name, Country and Sale Agent name for all invoices and customers.
SELECT i.Total, 
(c.FirstName || " " || c.LastName) FullName,
(e.FirstName || " " || e.LastName) RepName
FROM Invoice i
JOIN customer c
JOIN Employee e
WHERE c.SupportRepID = e.EmployeeID

8. How many Invoices were there in 2009 and 2011? What are the respective total sales for each of those years?
SELECT COUNT(*) AS 'Count', SUM(Total) as 'Total',
SUBSTR(InvoiceDate, 1,4) as year
FROM invoice 
WHERE InvoiceDate LIKE '2009%'
UNION
SELECT COUNT(*) AS 'Count', SUM(Total) AS 'Total',
SUBSTR(InvoiceDate,1,4) AS 'Year'
FROM Invoice
WHERE InvoiceDate LIKE '2011%'

9. Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for Invoice ID 37.
SELECT SUM(Quantity) FROM InvoiceLine
WHERE InvoiceID = 37

10. Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for each Invoice. HINT: [GROUP BY](http://www.sqlite.org/lang_select.html#resultset)
SELECT SUM(Quantity), InvoiceID
FROM InvoiceLine
GROUP BY InvoiceID

11. Provide a query that includes the track name with each invoice line item.
SELECT InvoiceLine.*, t.Name
FROM InvoiceLine, Track t
WHERE InvoiceLine.InvoiceLineID = t.TrackID

12. Provide a query that includes the purchased track name AND artist name with each invoice line item.
SELECT InvoiceLine.*, t.Name, artist.Name
FROM InvoiceLine, Track t, Artist, Album
WHERE InvoiceLine.InvoiceID = t.TrackID
AND t.AlbumID = album.AlbumID
AND album.ArtistID =  artist.ArtistID


13. Provide a query that shows the # of invoices per country. HINT: [GROUP BY](http://www.sqlite.org/lang_select.html#resultset)
SELECT COUNT(*), BillingCountry
FROM Invoice
GROUP BY BillingCountry

14. Provide a query that shows the total number of tracks in each playlist. The Playlist name should be included on the resultant table.
SELECT Playlist.Name, COUNT(*) AS 'Track Count'
FROM Playlist, PlaylistTrack
WHERE Playlist.PlaylistID = PlaylistTrack.PlaylistID
GROUP BY Playlist.Name

15. Provide a query that shows all the Tracks, but displays no IDs. The resultant table should include the Album name, Media type and Genre.
SELECT Track.Name AS 'Track', Album.Title AS 'Album', MediaType.Name AS 'media', Genre.Name AS 'genre'
FROM Track, Album, MediaType, Genre
WHERE Track.AlbumId = Album.AlbumId
AND Track.GenreId = Genre.GenreId
AND Track.MediaTypeId = MediaType.MediaTypeId;

16. Provide a query that shows all Invoices but includes the # of invoice line items.
SELECT Invoice.*, Count(*) AS 'Total Sales'
FROM Invoice, InvoiceLine
WHERE Invoice.InvoiceID = InvoiceLine.InvoiceID
GROUP BY Invoice.InvoiceID

17. Provide a query that shows total sales made by each sales agent.
SELECT Employee.FirstName || "" || Employee.LastName AS RepName,
SUM(Invoice.Total) AS 'Total'
FROM Invoice, Customer, Employee
WHERE Employee.Title = 'Sales Support Agent'
AND Invoice.CustomerID = Customer.CustomerID
AND customer.SupportRepID = Employee.EmployeeID
GROUP BY RepName

18. Which sales agent made the most in sales in 2009?
SELECT Employee.FirstName || "" || Employee.LastName AS RepName,
SUM(Invoice.Total) AS 'Total'
FROM Invoice, Customer, Employee
WHERE Employee.Title = 'Sales Support Agent'
AND Invoice.CustomerID = Customer.CustomerID
AND customer.SupportRepID = Employee.EmployeeID
AND Invoice.InvoiceDate LIKE '2009%'
GROUP BY RepName

answer: Steve Johnson

19. Which sales agent made the most in sales in 2010?
SELECT Employee.FirstName || "" || Employee.LastName AS RepName,
SUM(Invoice.Total) AS 'Total'
FROM Invoice, Customer, Employee
WHERE Employee.Title = 'Sales Support Agent'
AND Invoice.CustomerID = Customer.CustomerID
AND customer.SupportRepID = Employee.EmployeeID
AND Invoice.InvoiceDate LIKE '2010%'
GROUP BY RepName

answer: Jane Peacock

20. Which sales agent made the most in sales over all?
SELECT Employee.FirstName || "" || Employee.LastName AS RepName,
SUM(Invoice.Total) AS 'Total'
FROM Invoice, Customer, Employee
WHERE Employee.Title = 'Sales Support Agent'
AND Invoice.CustomerID = Customer.CustomerID
AND customer.SupportRepID = Employee.EmployeeID
GROUP BY RepName

answer: Jane Peacock

21. Provide a query that shows the # of customers assigned to each sales agent.
SELECT Employee.FirstName || "" || Employee.LastName AS RepName,
COUNT(DISTINCT Customer.CustomerID) AS 'Total'
FROM Invoice, Customer, Employee
WHERE Employee.Title = 'Sales Support Agent'
AND Invoice.CustomerID = Customer.CustomerID
AND Customer.SupportRepID = Employee.EmployeeID
GROUP BY RepName

22. Provide a query that shows the total sales per country. Which countrys customers spent the most?
SELECT BillingCountry AS "Country",
SUM(Total) AS 'Spending'
FROM Invoice
GROUP BY Country
ORDER BY Spending DESC

answer: USA

23. Provide a query that shows the most purchased track of 2013.
SELECT Track.Name AS 'Track',
COUNT(*) AS 'PurchaseCount'
FROM Invoice. Track. InvoiceLine
WHERE Invoice.InvoiceID = InvoiceLine.InvoiceID
AND InvoiceLine.TrackID = InvoiceLine.InvoiceID
AND Invoice.InvoiceDate LIKE '2013%'
GROUP BY Track
ORDER BY PurchaseCount DESC


24. Provide a query that shows the top 5 most purchased tracks over all
25. Provide a query that shows the top 3 best selling artists.
26. Provide a query that shows the most purchased Media Type.
27. Provide a query that shows the number tracks purchased in all invoices that contain more than one genre.