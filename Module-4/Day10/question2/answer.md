1. Definition of Database Relationship

A database relationship defines how two or more tables are connected to each other using common fields (usually primary keys and foreign keys).

Relationships help to:

Organize data efficiently
Avoid data duplication
Maintain data integrity
Retrieve meaningful information using joins

In an e-commerce application, relationships connect data like customers, products, orders, payments, and reviews.

2. Types of Database Relationships

There are three main types of database relationships:

One-to-One (1:1)
One-to-Many (1:M)
Many-to-Many (M:N)

3. One-to-One Relationship (1:1)
Definition

In a one-to-one relationship, one record in Table A is related to exactly one record in Table B, and vice versa.

E-Commerce Example

Customer ↔ Customer Profile
One customer has one profile
One profile belongs to only one customer

Tables Example

Customer Table
customer_id (PK)
name
email

Customer_Profile Table

profile_id (PK)
customer_id (FK)
address
phone_number

Diagram
Customer              Customer_Profile
---------             ----------------
customer_id  ───────► customer_id
name                  address
email                 phone

Real Use Case

Used when extra details should be stored separately for security or performance reasons (e.g., personal details).

4. One-to-Many Relationship (1:M)
Definition

In a one-to-many relationship, one record in Table A can be related to multiple records in Table B, but each record in Table B relates to only one record in Table A.

E-Commerce Example

Customer → Orders
One customer can place many orders
Each order belongs to only one customer

Tables Example

Customer Table
customer_id (PK)

name

Orders Table

order_id (PK)
customer_id (FK)

order_date

total_amount

Diagram
Customer               Orders
---------              -------
customer_id  ───────► customer_id
name                   order_id
                       order_date

Real Use Case

This is the most common relationship in e-commerce:

Customer → Orders
Category → Products
Seller → Products

5. Many-to-Many Relationship (M:N)
Definition

In a many-to-many relationship, multiple records in Table A relate to multiple records in Table B.
This requires a junction (bridge) table.

E-Commerce Example

Orders ↔ Products
One order can contain many products
One product can appear in many orders

Tables Example

Orders Table
order_id (PK)

Products Table

product_id (PK)
product_name

price

Order_Items Table (Junction Table)

order_id (FK)
product_id (FK)

quantity

Diagram
Orders        Order_Items        Products
------        -----------        --------
order_id ──► order_id
              product_id ─────► product_id
              quantity           product_name

Real Use Case

This is critical for:

Shopping carts
Order details

Product reviews by multiple users

6. Summary Table

Relationship Type	Description	E-Commerce Example
One-to-One	One record ↔ One record	Customer ↔ Profile
One-to-Many	One record ↔ Many records	Customer → Orders
Many-to-Many	Many records ↔ Many records	Orders ↔ Products

7. Conclusion

Database relationships form the foundation of e-commerce systems.
They allow applications to:

Track customers and orders
Manage products and categories
Process payments and reviews efficiently

Properly designed relationships ensure data accuracy, scalability, and performance in real-world applications.