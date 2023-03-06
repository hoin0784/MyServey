from flask import Flask, jsonify,render_template, request, url_for

import db

app = Flask(__name__)

# Operates when accessing the URL for the first time
@app.before_first_request
def initialize():
  db.setup()
  
@app.route('/')
def index():
  return render_template('Index.html')

@app.route('/survey')
def survery():
  return render_template('survey.html')

@app.route('/decline')
def decline():
  return render_template('decline.html')

@app.route('/thanks', methods =['GET','POST'] )
def thanks():
  
  # request.form -> Get the info from the forms ex) ('year' , 'Master')
  
  if request.method == 'POST':
    student_year = request.form['year']

    # Check whether the user typed the comment or not 
    if 'comment' in request.form:
      student_comment = request.form['comment']
    else:
      student_comment = None
    
    # If the user chose 'libary' and 'framework'
    if 'library' in request.form and 'framework' in request.form:
      library = request.form['library']
      framework = request.form['framework']
      
    # If the user did not choose 'library but chose framework'
    elif 'library' in request.form and 'framework' not in request.form: 
      library = request.form['library']
      framework = None
      
    # If the user did not choose 'framework but chose library.
    elif 'library' not in request.form and 'framework' in request.form:
      library = None
      framework = request.form['framework']
      
    # User did not choose both
    else:
      library = None
      framework = None
    
    with db.get_db_cursor(commit=True) as cur:
      cur.execute("insert into survey (student_year, library, framework, student_comment) values (%s, %s, %s, %s)",
                  (student_year, library, framework, student_comment))

  return render_template('thanks.html')

# This URL is an API endpoint that returns a JSON representation of
# all the survey response that I have collected to date

@app.route('/api/results')
def survey_results(json=True):
  data = []

  with db.get_db_cursor() as cur:
    cur.execute("select * from survey")
    rows = cur.fetchall()                 # Data fetch
                                          # (execute) Return all the records retrieved as per query in a tuple form. 
    for row in rows:
      data.append(dict(row))              # key : value 
    
    # if the parameter 'reverse' is in URL and that is true then...
    if 'reverse' in request.args and request.args['reverse'] == 'true':
    # reverse the order      
      data = list(reversed(data))

    if json is True:
      return jsonify(data)
    else:                                 # The case for sending data for survey_summary()
      return data
   
@app.route('/admin/summary')
def survey_summary():
  data_summary = survey_results(False)

  print(data_summary)

  return render_template('summary.html', data_summary = data_summary)
  
if __name__ == '__main__':
  app.run(debug=True)