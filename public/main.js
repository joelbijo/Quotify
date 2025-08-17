const quoteText = document.getElementById("quoteText");
const generateBtn = document.getElementById("generateButton");
const sentimentBtn = document.getElementById("sentimentButton");
const downloadBtn = document.getElementById("downloadButton");
let currentQuote = "";

//Disable buttons on page load
sentimentBtn.disabled = true;
downloadBtn.disabled = true;

generateBtn.onclick = async () => {
  const res = await fetch("/api/quote");
  const data = await res.json();
  currentQuote = data.quote;
  quoteText.textContent = `"${currentQuote}"`;
  sentimentBtn.disabled = false;
  downloadBtn.disabled = false;
};

sentimentBtn.onclick = async () => {
  const res = await fetch("/api/sentiment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quote: currentQuote }),
  });
  const data = await res.json();
  console.log(data);
  sentimentBtn.textContent = `Sentiment: ${data.sentiment}`;
};

downloadBtn.onclick = () => {
  html2canvas(document.getElementById("card")).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "quote-card.png";
    link.click();
  });
};
