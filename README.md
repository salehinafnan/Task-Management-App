# Task Management Application

This is a task management application built with Next.js, TypeScript, Tailwind CSS, and Mobx State Tree. It allows users to create, view, update, and delete tasks. The application utilizes local storage for data persistence.

## Features

- View a list of tasks
- Add a new task
- Edit an existing task
- Delete a task

## Technologies Used

- Next.js: A React framework for building server-side rendered applications.
- TypeScript: A statically-typed superset of JavaScript that improves code maintainability and reliability.
- Tailwind CSS: A utility-first CSS framework for styling and layout.
- Mobx State Tree (MST): A state management library for predictable state management.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/salehinafnan/Task-Management-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Task-Management-App
   ```

3. Install the dependencies:

   ```bash
   yarn
   ```

4. Run the development server:

   ```bash
   yarn run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application.

## Persistence

The application persists task data using local storage. Tasks are stored under the key "taskStore" as a JSON string.
