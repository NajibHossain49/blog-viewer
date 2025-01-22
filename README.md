# Blog Viewer Application

This is a simple blog viewer built with Next.js to demonstrate routing, dynamic routes, authentication, and data fetching. The application fetches blog post data from a mock API and allows users to view individual blog details, navigate between pages, and access a protected profile page.

## Live Demo

You can check out the live version of the application here:  
🌍[Live Demo](https://blog-viewer-livid.vercel.app)

## Features

- **Home Page (Static Route)**: Displays a list of blog post titles fetched from a mock API. Each title links to a detailed blog page.
- **Blog Details Page (Dynamic Route)**: Displays details for a specific blog post based on the `id` parameter in the URL.
- **Protected Page (Static Route)**: A "Profile" page that is protected using Kinde Auth. Users must be authenticated to access this page.
- **Navigation**: Includes links to "Home" and "Profile", with dynamic login/logout buttons based on user authentication status.
- **Styling**: Basic styling is applied using Tailwind CSS to make the app visually clean and responsive.

## Pages

- **Home Page (`/`)**: Displays a list of blog post titles. Each title is a link to the individual blog post details page.
- **Blog Details Page (`/blog/[id]`)**: Fetches and displays a single blog post's details based on the `id` from the URL.
- **Profile Page (`/profile`)**: A protected page that shows a static message "Welcome to your profile!". Requires user authentication via Kinde Auth.

## Mock API Endpoints

The application uses the following mock API to fetch data:

- **All Posts**: `GET https://jsonplaceholder.typicode.com/posts`  
  Returns a list of all blog post titles and ids.
  
- **Single Post**: `GET https://jsonplaceholder.typicode.com/posts/[id]`  
  Returns the details of a single post, based on the `id` parameter in the URL.

## Authentication

This app uses **Kinde Auth** to protect the profile page. You will need to configure Kinde Auth in your project:

1. Sign up for Kinde Auth (if you haven't already).
2. Follow the Kinde documentation to set up authentication.
3. Add necessary environment variables to your `.env` file (e.g., `KIND_AUTH_API_KEY`, `KIND_AUTH_REDIRECT_URL`).

Once configured, users must log in to view the protected profile page.

## Technologies Used

- **Next.js**: A React framework for building static and dynamic web applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Kinde Auth**: Used for user authentication and protecting the profile page.
