import React from "react";
import styles from "./GenreSuggestions.module.css";

const GenreSuggestions = ({ genres, onSelect }) => (
    <div className={styles.genreContainer}>
        {genres.map((genre) => (
            <button
                key={genre}
                className={styles.genreButton}
                onClick={() => onSelect(genre)}
            >
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </button>
        ))}
    </div>
);

export default GenreSuggestions; 