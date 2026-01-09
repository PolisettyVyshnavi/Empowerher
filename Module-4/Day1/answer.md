Q1. Role of Frontend (FE) in a Web Application
The Frontend (FE) is everything the user sees and interacts with in a web application.
-  User Interface (UI):
- Responsible for the visual design (layout, colors, typography, responsiveness).
- Built using HTML, CSS, and JavaScript (plus frameworks like React, Angular, Vue).
- Ensures accessibility and usability across devices.


- User Interaction:
- Handles events like clicks, typing, scrolling, drag-and-drop.
- Provides dynamic experiences (e.g., animations, form validations).
- Uses state management to reflect changes instantly without reloading the page.


- Communication with Backend:
- Sends requests to the backend (e.g., via REST APIs, GraphQL).
- Displays data received from the backend (e.g., product listings, user profiles).
- Uses AJAX or Fetch API for asynchronous communication.

Q2. Role of Backend (BE) in a Web Application
The Backend (BE) is the behind-the-scenes engine that powers the application.
-  Server-Side Processing:
- Executes business logic and processes requests from the frontend.
- Handles tasks like calculations, file processing, and sending responses.


- Database Handling:
- Manages data storage, retrieval, and updates.
- Uses databases like MySQL, PostgreSQL, MongoDB.
- Ensures data consistency and integrity.


- Security and Authentication:
- Implements user authentication (login, signup, sessions, tokens).
- Protects against threats (SQL injection, XSS, CSRF).
- Manages authorization (who can access what).

Q3. Business Logic
Business Logic is the set of rules, workflows, and operations that define how data is processed and decisions are made in an application.
- It connects frontend actions with backend processes.
- Ensures the application behaves according to the organization’s requirements.
Real-World Examples:
-  E-commerce Checkout:
- Apply discounts, calculate taxes, shipping costs, and validate payment.
-  Banking Application:
- Validate withdrawal limits, calculate interest, enforce transaction rules.
-  Email Service:
- Prevent sending spam, enforce attachment size limits, schedule delivery.

Q4. Client–Server Model
The Client–Server Model is the foundation of web applications.
-  Client:
- The user’s device/browser running the frontend.
- Requests services/data from the server.


- Server:
- The backend system that processes requests and sends responses.
- Hosts business logic and databases.


- Communication:
- Happens via HTTP/HTTPS protocols.
- Client sends requests → Server processes → Server sends responses.
- Often uses APIs (REST, GraphQL) for structured communication.

Q5. Three-Tier Architecture
A 3-Tier Architecture separates concerns into three distinct layers:
- Presentation Layer (Frontend):
- UI/UX components.
- Handles user input and displays output.


- Application (Business) Layer:
- Contains business logic.
- Processes requests, applies rules, and coordinates between frontend and data layer.


- Data Layer:
- Manages databases and storage.
- Ensures secure and efficient data handling.
Why It’s Used:
- Scalability (layers can be scaled independently).
- Maintainability (clear separation of concerns).
- Security (data layer hidden behind business logic).
- Flexibility (easy to replace or upgrade layers).

Q6. JavaScript as a Backend Language
JavaScript, traditionally a frontend language, is now widely used in the backend (thanks to Node.js).
- Performance:
- Non-blocking, event-driven architecture.
- Handles thousands of concurrent requests efficiently.


-  Ecosystem:
- Huge package library (npm).
- Active community and continuous updates.


- Popular Backend Frameworks:
- Express.js → Lightweight, fast, widely used for APIs.
- NestJS → Structured, scalable, TypeScript-based.
- Next.js (Full-stack) → Combines frontend + backend features.
- Meteor.js → Real-time applications.
