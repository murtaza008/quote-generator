import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ value, onChange, onSearch }) => (
    <div className={styles.searchBarContainer}>
        <input
            type="text"
            placeholder="Search for a quote..."
            value={value}
            onChange={onChange}
            className={styles.input}
        />
        <button onClick={onSearch} className={styles.button}>
            Search
        </button>
    </div>
);

export default SearchBar; 