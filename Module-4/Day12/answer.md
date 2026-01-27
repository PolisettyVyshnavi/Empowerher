Schema Design in Relational Databases

1. What Schema Design Is and What a Database Schema Represents

- Schema design is the process of defining how data will be organized, stored, and related in a relational database.
- A database schema represents the logical structure of the database: tables, columns, relationships, constraints, and rules.
- Example: A schema for an e-commerce system may include tables like users, orders, and products, with relationships defined between them.

2. Why Schema Design Is Required Before Writing Backend Code

- Backend code interacts with the database through queries. If the schema is poorly designed, the code becomes complex and error-prone.
- Designing the schema first ensures:
- Clear data relationships
- Efficient queries
- Reduced chances of bugs
- Example: If you don’t define a proper foreign key between users and orders, backend code must manually enforce relationships, which is inefficient.

3. How Poor Schema Design Impacts Data Consistency, Maintenance, and Scalability

- Data Consistency: Without proper constraints, duplicate or invalid data can enter the system.
- Maintenance: Developers spend more time fixing errors and writing complex queries.
- Scalability: Poorly normalized schemas lead to redundant data, making the database grow unnecessarily large and slow.
- Example: Storing user emails inside every order record causes duplication. If a user changes their email, updating all orders becomes error-prone.

4. Validations in Schema Design and Why Databases Enforce Them

- Validations are rules applied at the schema level to ensure data integrity.
- Common validations:
- NOT NULL: Prevents missing values in critical fields.
- UNIQUE: Ensures no duplicate values (e.g., email addresses).
- DEFAULT: Provides a fallback value when none is supplied.
- PRIMARY KEY: Guarantees each row is uniquely identifiable.
- Databases enforce these validations to maintain accuracy, reliability, and trustworthiness of stored data.

5. Difference Between a Database Schema and a Database Table

- Schema: The overall blueprint of the database, including tables, relationships, and constraints.
- Table: A single structure within the schema that stores data about one entity.
- Example: The schema may define users and orders tables, while each table contains rows of data specific to that entity.

6. Why a Table Should Represent Only One Entity

- Each table should model a single concept (entity) to avoid confusion and redundancy.
- Example: A users table should only store user details, not their orders. Orders belong in a separate orders table.
- This separation follows normalization principles, ensuring clarity and scalability.

7. Why Redundant or Derived Data Should Be Avoided in Table Design

- Redundant data wastes storage and risks inconsistency.
- Derived data (like totals or averages) should be calculated via queries, not stored.
- Example: Instead of storing total_order_amount in the users table, calculate it using SUM(amount) from the orders table when needed.

8. Importance of Choosing Correct Data Types While Designing Tables

- Correct data types ensure efficient storage, accurate representation, and faster queries.
- Example:
- Use INTEGER for order amounts, not TEXT.
- Use TIMESTAMP for dates, not VARCHAR.
- Choosing wrong types leads to wasted space, slower queries, and potential errors (e.g., sorting numbers stored as text will sort incorrectly).
