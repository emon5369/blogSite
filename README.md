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
     REACT_APP_APPWRITE_ENDPOINT=<Your Appwrite endpoint>
     REACT_APP_APPWRITE_PROJECT_ID=<Your Appwrite project ID>
     REACT_APP_APPWRITE_DATABASE_ID=<Your Appwrite database ID>
     REACT_APP_APPWRITE_COLLECTION_ID=<Your Appwrite collection ID>
     REACT_APP_APPWRITE_BUCKET_ID=<Your Appwrite bucket ID>
     ```

   Replace the placeholder values with your actual Appwrite project details.

4. **Run the development server:**

   ```bash
   npm run dev
   ```
   
## Contribution

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue to discuss improvements or bug fixes.
