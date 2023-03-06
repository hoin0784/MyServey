
function framework(data_summary, framework_chart) {

  // Student_framework: Django / Flask / Express / Spring / etc 
  let Student_framework = [0, 0, 0, 0, 0];


  for (let i = 0; i < data_summary.length; i++) {
    let list = data_summary[i];
    let framework = list.framework;

    switch (framework) {
      case 'Django':
        Student_framework[0]++;
        break;

      case 'Flask':
        Student_framework[1]++;
        break;

      case 'Express':
        Student_framework[2]++;
        break;

      case 'Spring':
        Student_framework[3]++;
        break;

      case 'etc':
        Student_framework[4]++;
        break;

      case null:
        Student_framework[4]++;
        break;
    }
  }

  new Chart(framework_chart, {
    type: 'bar',
    data: {
      labels: ['Django', 'Flask', 'Express', 'Spring', 'etc'],
      datasets: [{
        label: 'Number of votes',
        data: Student_framework,
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