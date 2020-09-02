from flask import Flask, render_template, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '9542422675'
app.config['MYSQL_DB'] = 'flask'
mysql = MySQL(app)


@app.route("/")
def my_index():
    return render_template("index.html", token="Note_webapp")


@app.route("/getnotes")
def my_notes():
    cur = mysql.connection.cursor()
    cur.execute("select * from notes")
    data = cur.fetchall()
    mysql.connection.commit()
    note = []
    for x in data:
        note.append(x[1])
    return jsonify(note)


@app.route("/deletenote", methods=['POST'])
def delete_notes():
    cur = mysql.connection.cursor()
    note = ''
    if request.get_json()['note']:
        note = request.get_json()['note']
    print(note)
    cur.execute("select id from notes where note =%s", [note])
    data = cur.fetchone()
    print(data)
    cur.execute("DELETE FROM notes WHERE id = %s", [data])
    mysql.connection.commit()
    return "success"


@app.route("/addnote", methods=['POST'])
def my_note():
    cur = mysql.connection.cursor()
    note = ''
    if request.get_json()['note']:
        note = request.get_json()['note']
    print(note)
    data = cur.execute("select id from notes where note =%s", [note])
    if data == 0:
        cur.execute("INSERT INTO notes(note) VALUES (%s)", [note])
    else:
        return "exits"
    mysql.connection.commit()
    return "success"


if __name__ == '__main__':
    app.run(debug=True)
