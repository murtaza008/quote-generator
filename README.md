# Quote Generator

A modern, flexible random quote generator built with React and Vite.

## Features
- Search for quotes by keyword, author, or genre (with smart matching: e.g., 'motivate' matches 'motivational')
- Genre suggestions for quick filtering
- Responsive, clean UI
- No quote is shown until you search or select a genre
- 'Another Quote' button appears only after the first quote is shown
- Easily add your own quotes

## Tech Stack
- React 19
- Vite
- Tailwind CSS (for utility classes)
- Custom CSS Modules for component styling

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## Usage
- Use the search bar to find quotes by keyword, author, or genre. Typing similar words (e.g., 'motivate' for 'motivational') will also work.
- Click a genre suggestion to instantly filter quotes by that genre.
- No quote is shown until you search or select a genre.
- Click 'Another Quote' to see a new random quote from the current filter.

## Adding Quotes
- Open `src/data/quotes.js`.
- Add a new object to the `quotes` array in the following format:
  ```js
  {
    text: "Your quote here.",
    author: "Author Name",
    genres: ["motivational", "life"] // Use existing or new genres
  }
  ```
- Save the file and your new quote will be included automatically.

---

Feel free to contribute or customize the app for your needs!
