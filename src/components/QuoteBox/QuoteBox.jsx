import React from "react";
import Button from "../Button/Button";
import styles from "./QuoteBox.module.css";

const QuoteBox = ({ quote, onNewQuote }) => (
    <div className={styles.quoteBox}>
        <p className={styles.quoteText}>&quot;{quote.text || quote.content}&quot;</p>
        <p className={styles.quoteAuthor}>- {quote.author || "Unknown"}</p>
        <Button onClick={onNewQuote} className={styles.button}>
            Another Quote
        </Button>
    </div>
);

export default QuoteBox; 