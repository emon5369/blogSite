# UBlog

**UBlog** is a modern, responsive blogging platform built with React and Appwrite. It enables users to create, manage and share their thoughts seamlessly. The platform features a rich text editor and also image upload support. Designed with a focus on user experience, UBlog ensures that content creators can easily publish posts and manage their blogs.

## Key Features

- **Rich Text Editor**: Craft beautiful posts with an intuitive WYSIWYG editor.
- **Image Upload**: Easily upload and manage featured images for each post.
- **User Authentication**: Secure login and registration with Appwrite’s authentication system.
- **Form Handling**: Simplified form management using React Hook Form.
- **Responsive Design**: Fully responsive layout for optimal viewing on any device.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Appwrite for user authentication and file storage
- **Form Management**: React Hook Form
- **State Management**: Redux Toolkit
- **Routing**: React Router

## Getting Started

### Prerequisites

- **Node.js**
- **npm**
- **Appwrite** account for backend services

## Appwrite Setup

This project uses [Appwrite](https://appwrite.io) for authentication, database management, and file storage. Follow these steps to set up Appwrite for this project:

### Step 1: Create a New Project

1. Log in with your Appwrite account.
2. Create a new project and note down the **Project ID**.

### Step 2: Setup Authentication

1. Navigate to the **Auth** section of your project.
2. Enable **Email/Password Authentication** in the settings for user registration and login.

### Step 3: Setup Database Collections

1. Go to the **Database** section.
2. Create a collection named `articles`.
3. Add the following attributes:
   - `title` (string)
   - `content` (string)
   - `featuredImage` (string) - for storing the uploaded image file IDs
   - `status` (string)
   - `userId` (string) - to associate posts with users
   
4. From the `articles` collection, go to the "Settings" > "Permissions" > " + Add role" and select "All users". Give this user type "Create", "Read", "Update" and "Delete" permissions.

### Step 4: Setup File Storage

1. Go to the **Storage** section.
2. Create a new bucket for file uploads named `images`.
3. Ensure that authenticated users have permission to upload and delete files.

### Step 5: Install the Appwrite SDK

```bash
npm install appwrite
```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/emon5369/blogsite
   cd blogsite
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory.
   - Add the following environment variables:

     ```bash
     VITE_APPWRITE_URL= <Your Appwrite endpoint>
     VITE_APPWRITE_PROJECT_ID= <Your Appwrite project ID>
     VITE_APPWRITE_DATABASE_ID= <Your Appwrite database ID>
     VITE_APPWRITE_COLLECTION_ID= <Your Appwrite collection ID>
     VITE_APPWRITE_BUCKET_ID= <Your Appwrite bucket ID>
     ```

   Replace the placeholder values with your actual Appwrite project details.

4. **Run the development server:**

   ```bash
   npm run dev
   ```
The app should now be running at http://localhost:5173.

## Demo

Check out the live demo of UBlog: [Click here](https://ublogsite.netlify.app/)

**Demo Credentials:**

- **Email**: emon@gmail.com
- **Password**: 12345678

## Contribution

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue to discuss improvements or bug fixes.
