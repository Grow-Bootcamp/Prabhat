Week 7 Day 2 – Frontend Authentication & Role-Based Authorization
Date: November 3, 2026

Topic: React Authentication, JWT Integration and Role-Based Access Control (RBAC)

1. Objectives
- Understand authentication and authorization in React.
- Integrate frontend authentication with the backend JWT system.
- Implement protected routes using React Router.
- Implement role-based authorization for admin and regular users.
- Control UI access based on user roles.

2. Topics Learned
React Authentication

Learned how to manage authentication using React Context API, createContext, useContext, and useState.

AuthContext

Created a centralized authentication context to manage:
- User information.
- Access token.
- Login functionality.
- Logout functionality.
- Authentication status.
JWT Integration

Integrated the React frontend with the backend login API using Axios. Learned how to send login credentials and receive the access token and user information.

Protected Routes

Implemented a reusable ProtectedRoute component using React Router. It prevents unauthenticated users from accessing protected pages and redirects them to the login page.

Role-Based Access Control (RBAC)

Implemented role-based route protection for admin and regular users using an allowedRoles property.
- Admin users can access the Admin Dashboard.
- Regular users can access the User Dashboard.
- Unauthorized users are redirected to the general dashboard.
Conditional Rendering

Learned how to display different dashboard navigation options depending on the authenticated user's role.

3. Implementation
Developed the following components:
- AuthContext.tsx – Centralized authentication management.
- ProtectedRoute.tsx – Authentication and role-based route protection.
- Login.tsx – User login interface.
- Dashboard.tsx – General user dashboard.
- AdminDashboard.tsx – Admin-specific dashboard.
- UserDashboard.tsx – Regular user dashboard.
- App.tsx – Application routing configuration.

4. Testing and Verification
Successfully tested the following scenarios:
Test Case	Result
Admin login	Passed
Regular user login	Passed
Unauthenticated route access	Passed
Admin accessing admin dashboard	Passed
User accessing user dashboard	Passed
User attempting to access admin dashboard	Passed
Role-based navigation	Passed

5. Challenges Faced
- Understanding how React Context manages authentication state.
- Configuring protected routes with React Router.
- Debugging blank dashboard pages caused by incorrect conditional logic and missing component returns.
- Understanding the difference between authentication and authorization.
- Implementing role-based navigation and access restrictions.

6. Key Learnings
- Authentication verifies who the user is.
- Authorization determines what the user is allowed to access.
- React Context API helps share authentication state across components.
- Protected routes prevent unauthorized frontend navigation.
- RBAC restricts access according to user roles.
- Frontend route protection must be supported by backend authorization for actual security.

7. Conclusion
Successfully implemented frontend authentication and role-based authorization using React, TypeScript, Axios, React Context API and React Router. Integrated the frontend with the existing backend JWT authentication system and verified access restrictions for admin and regular users.