interface Quote {
  author: string;
  quote: string;
}

export async function fetchQuotes(): Promise<Quote[]> {
  const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
  const data = await response.json();
  const quotes: Quote[] = data.quotes.map((quote: any) => ({
    author: quote.author,
    quote: quote.quote
  }));
  return quotes;
}

export async function main() {
  const quotes = await fetchQuotes();
  console.log(quotes);
}

//Finally, we use the require.main === module check to only call the main function when this file is executed directly (e.g. with ts-node). 
//This allows other files to import the fetchQuotes function without triggering the console.log statement.
if (require.main === module) {
  main();
}