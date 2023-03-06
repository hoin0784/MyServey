
function library(data_summary, library_chart) {

  // Student_library: React / Angular / Vue / etc
  
  let Student_library = [0, 0, 0, 0];

  for (let i = 0; i < data_summary.length; i++) {
    let list = data_summary[i];
    let library = list.library;

    switch (library) {
      case 'React':
        Student_library[0]++;
        break;

      case 'Angular':
        Student_library[1]++;
        break;

      case 'Vue':
        Student_library[2]++;
        break;

      case 'etc':
        Student_library[3]++;
        break;

      case null:
        Student_library[3]++;
        break;
      
    }
  }

  new Chart(library_chart, {
    type: 'bar',
    data: {
      labels: ['React','Angular','Vue.js','etc'],
      datasets: [{
        label: 'Number of votes',
        data: Student_library,
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