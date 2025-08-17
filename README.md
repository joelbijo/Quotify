# Quotify API

Quotify is a web-based application and REST API that delivers random quotes from a curated list and provides instant **sentiment analysis** for each quote. Users can view a quote, check its sentiment (positive, negative, or neutral), and download a stylish quote card as an image.

---

## Features

- **Get a Random Quote:** Fetches a quote from a local JSON database using Express and Node.js.
- **Sentiment Analysis:** Uses the Sentiment.js package to indicate whether each quote is positive, negative, or neutral.
- **Beautiful Responsive UI:** Built with HTML, CSS, and JavaScript.
- **Download Quotes as Images:** With one click, save the displayed quote card as a PNG image.

---

## Requirements

- **Node.js & npm** (Tested with v14+)
- **Express** web framework
- **Sentiment.js** library
- **quotes.json**: A local JSON file containing your quotes

---

## Installation & Local Setup

1. **Clone the repository**
2. **Install dependencies:** npm install express sentiment
3. **Add your quotes:**
   Place a `quotes.json` file with quote objects under the project root.  Here, `quotes.json` file is already provided.
4. **Run the server**
5. **Access the app:**
Open your browser at [http://localhost:3000](http://localhost:3000)

---

## Frontend Usage

- Click **Get Quote** to fetch a new quote.
- Click **Check Sentiment** to run sentiment analysis on the displayed quote.
- Click **Download Card** to save the quote card as an image.

---

## License

MIT 
