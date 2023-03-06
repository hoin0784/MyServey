
function year(data_summary,year_chart){

  // Student_year: N/A / Freshman / Sophomore / Junior / Senior / Master
  let Student_year = [0, 0, 0, 0, 0, 0];


  for (let i = 0; i < data_summary.length; i++) {
    let list = data_summary[i];
    
    let year = list.student_year;
    
    switch (year) {
      case 'NA':
        Student_year[0]++;
        break;

      case 'Freshman':
        Student_year[1]++;
        break;

      case 'Sophomore':
        Student_year[2]++;
        break;

      case 'Junior':
        Student_year[3]++;
        break;

      case 'Senior':
        Student_year[4]++;
        break;

      case 'Master':
        Student_year[5]++;
        break;
    }
  }

  new Chart(year_chart, {
    type: 'bar',
    data: {
      labels: ['N/A', 'Freshman', 'Sophomore', 'Junior', 'Senior', 'Master'],
      datasets: [{
        label: 'Number of votes',
        data: Student_year,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          suggestedMax: 10,
          beginAtZero: true
        }
      }
    }

  });
}