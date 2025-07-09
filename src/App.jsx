import React, { useState } from "react";
import Header from "./components/Header/Header";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import SearchBar from "./components/SearchBar/SearchBar";
import GenreSuggestions from "./components/GenreSuggestions/GenreSuggestions";
import quotes from "./data/quotes";
import styles from "./App.module.css";

const GENRES = [
  "motivational",
  "inspire",
  "happiness",
  "life",
  "love",
  "wisdom",
  "success",
  "friendship",
  "sad",
  "funny",
];

const GENRE_SYNONYMS = {
  motivate: "motivational",
  inspired: "inspire",
  happy: "happiness",
  wisdom: "wisdom",
  life: "life",
  love: "love",
  success: "success",
  friend: "friendship",
  sad: "sad",
  funny: "funny",
};

function findMatchingGenre(input) {
  const lowerInput = input.toLowerCase();
  // Check direct match
  if (GENRES.includes(lowerInput)) return lowerInput;
  // Check synonym map
  if (GENRE_SYNONYMS[lowerInput]) return GENRE_SYNONYMS[lowerInput];
  // Check substring match
  const found = GENRES.find(g => g.includes(lowerInput) || lowerInput.includes(g));
  if (found) return found;
  return null;
}

function getRandomQuote(filteredQuotes) {
  const arr = filteredQuotes && filteredQuotes.length > 0 ? filteredQuotes : quotes;
  return arr[Math.floor(Math.random() * arr.length)];
}

const App = () => {
  const [quote, setQuote] = useState(null); // Start with no quote
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false); // Track if user has started

  const handleSearch = () => {
    if (!search.trim()) return;
    // Try genre matching first
    const genreMatch = findMatchingGenre(search.trim());
    let filtered = [];
    if (genreMatch) {
      filtered = quotes.filter(q => q.genres.includes(genreMatch));
    } else {
      filtered = quotes.filter(q =>
        q.text.toLowerCase().includes(search.toLowerCase()) ||
        q.author.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (filtered.length === 0) {
      setError("No quotes found for your search.");
      setQuote(null);
    } else {
      setError("");
      setQuote(getRandomQuote(filtered));
      setStarted(true); // Mark as started after first search
    }
  };

  const handleGenre = (genre) => {
    setSearch("");
    const filtered = quotes.filter(q => q.genres.includes(genre));
    if (filtered.length === 0) {
      setError("No quotes found for this genre.");
      setQuote(null);
    } else {
      setError("");
      setQuote(getRandomQuote(filtered));
      setStarted(true); // Mark as started after first genre selection
    }
  };

  const handleNewQuote = () => {
    let filtered = quotes;
    if (search.trim()) {
      filtered = quotes.filter(q =>
        q.text.toLowerCase().includes(search.toLowerCase()) ||
        q.author.toLowerCase().includes(search.toLowerCase())
      );
    }
    setQuote(getRandomQuote(filtered));
    setError("");
  };

  return (
    <div className={styles.appBg}>
      <Header />
      <main className={styles.main}>
        <div className={styles.dialogBox}>
          <SearchBar
            value={search}
            onChange={e => setSearch(e.target.value)}
            onSearch={handleSearch}
          />
          <GenreSuggestions genres={GENRES} onSelect={handleGenre} />
          {error && <p style={{ color: "#b91c1c", marginBottom: "1rem" }}>{error}</p>}
          {started && quote && <QuoteBox quote={quote} onNewQuote={handleNewQuote} />}
        </div>
      </main>
    </div>
  );
};

export default App;
