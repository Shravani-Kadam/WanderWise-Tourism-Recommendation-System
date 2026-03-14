from flask import Flask, render_template, request
import pandas as pd

# Tell Flask that HTML is in the same folder
app = Flask(__name__, template_folder=".")

# Load dataset
data = pd.read_csv("tourism_dataset.csv")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/recommend", methods=["POST"])
def recommend():

    budget = request.form.get("budget")
    season = request.form.get("season")
    interest = request.form.get("interest")

    # Filter dataset
    results = data[
        (data["Budget"] == budget) &
        (data["Season"] == season) &
        (data["Interest"] == interest)
    ]

    places = results["Place"].tolist()

    return render_template("index.html", recommendations=places)


if __name__ == "__main__":
    app.run(debug=True)

