from flask import Flask, render_template

app = Flask(__name__, static_folder="static/", template_folder="static")

@app.route("/")
def index():
    data = []
    data.append({"word": "hello",
                        "value": 3,
                        "url": "https://news.google.com/search?q=" + "hello"})
    return render_template("index.html", data=data)

@app.route("/hello")
def hello():
    return "Hello Python!"

if __name__ == "__main__":
    app.run(debug=True)