# User Management Application

## Overview

This application allows users to add new user information and displays a list of users fetched from an external API. The project is structured using HTML for the layout, CSS for styling, and JavaScript for functionality.

## Features

### User Form

- Users can input information including first name, last name, email, city, and street.
- The form includes validation to ensure that at least one field is filled before submission.

### User List Display

- Users added via the form are displayed in a list at the top of the users list.
- The application also fetches and displays a list of users from the external API `https://jsonplaceholder.typicode.com/users`.

### Local Storage

- The application uses local storage to temporarily store and retrieve user input.

### JavaScript Functionality

- Fetches user data from an external API and displays each user's name, email, and address.
- Handles the form submission to add a new user to the list.
- Validates the form input and displays an error message if all fields are empty.

### CSS Styling

- The `.main` class is used to style the primary layout with flexbox.
- Additional styles are applied to form elements and list items for a neat and user-friendly interface.

## HTML Structure

- The HTML file includes a form for adding new users and an ordered list (`<ol>`) for displaying the users.
- The JavaScript file `script.js` is linked to manage the application's functionality.

## Usage

1. Open the application in a web browser.
2. Input user information in the form fields and click 'Add new user' to submit.
3. View the updated list of users, including those added via the form and fetched from the API.

## Note

- This application is a demonstration of combining client-side scripting with external API integration.
- It serves as an educational tool for understanding web development concepts including API interaction, form handling, and local storage in web applications.
