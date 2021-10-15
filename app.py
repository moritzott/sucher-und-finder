from flask import Flask, render_template

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index():
    return render_template("home.html")

@app.route("/sucher", methods=["GET"])
def sucher():
    return render_template("sucher.html")

@app.route("/finder", methods=["GET"])
def finder():
    return render_template("finder.html")

@app.route("/info", methods=["GET"])
def info():
    return render_template("info.html")

@app.route("/hilfe", methods=["GET"])
def hilfe():
    return render_template("hilfe.html")

@app.route("/finder/login", methods=["GET"])
def finder_login():
    return render_template("finder-login.html")

@app.route("/finder/registration")
def finder_registration():
    return 1


if __name__ == "__main__":
    app.run(debug=True, port=8000)