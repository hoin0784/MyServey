# CSCI 5117 Spring 2023 - My survey

## App Design -

<img src = "static/IMG/Mainpage.png">
Figure 1 "Index.html"

    / -> The root page descirbes the survey and asks the users to consent to participate. It has two buttons at the bottom: "consent"(go to /survey) and "decline"(go to /decline).
<hr>

<img src = "static/IMG/SurveyPage.png">
Figure 2 "survey.html"
    
    /survey -> Asks the user's perference of lirary,framework,school year and comment.

<hr>
<img src = "static/IMG/Declinepage.png">
Figure 3 "decline.html"

    /decline -> A page that shows "thanks anyway"

<hr>
<img src = "static/IMG/api:results.png">
Figure 4 "Api results" <br><br>

    /api/results -> This URL is an API endpoint that returns a JSON representation of all the survey responses that I have collected to date.

<hr>
<img src = "static/IMG/ReverseTrue.png">
Figure 5 "Api results reverse"

    /api/results?=reverse= true -> if the user includes this query parameter the results are instead ordered by most recent firsta

<hr>
<img src = "static/IMG/FirstChart.png">
Figure 5 "FirstChart"

<hr>
<img src = "static/IMG/SecondChart.png">
Figure 6 "SecondChart"

<hr>
<img src = "static/IMG/CommentPage.png">
Figure 7 "Comments"

    /admin/summary -> This web page shows an aggregated summary of the survey results.
  For making the chart, I have used  <https://www.chartjs.org/>

  ## Link to site
  <https://mysurvey.onrender.com/>

  ## See the survey results
  <https://mysurvey.onrender.com/admin/summary>
