function processText() {
    let text = document.getElementById("newsInput").value;

    if (!text) {
        alert("Please enter some news text.");
        return;
    }

    fetch("/process", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert("Error: " + data.error);
        } else {
            document.getElementById("summaryText").innerText = data.summary;
            document.getElementById("sentimentText").innerText = data.sentiment;
        }
    })
    .catch(error => console.error("Error:", error));
}
