from flask import Flask, render_template, request, jsonify
from models.summarizer import summarize_text
from models.sentiment import analyze_sentiment

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    text = data.get("text")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    summary = summarize_text(text)
    sentiment = analyze_sentiment(text)

    return jsonify({"summary": summary, "sentiment": sentiment})

if __name__ == '__main__':
    app.run(debug=True)
