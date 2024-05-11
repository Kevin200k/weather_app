// // script.js
// const ctx = document.getElementById('weatherChart').getContext('2d');

// // Sample data (replace with your actual data)
// const labels = ['Now', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM', '12 AM', '2 AM', '4 AM', '6 AM', '8 AM'];
// const temperatures = [20, 21, 21, 21, 21, 17, 15, 14, 13, 12, 11, 14];

// new Chart(ctx, {
//     type: 'line', // You can choose other chart types (bar, pie, etc.)
//     data: {
//         labels: labels,
//         datasets: [{
//             label: 'Temperature (°C)',
//             data: temperatures,
//             borderColor: 'rgba(75, 192, 192, 1)',
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderWidth: 1,
//             pointRadius: 4,
//             pointBackgroundColor: 'rgba(75, 192, 192, 1)',
//         }]
//     },
//     options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 ticks: {
//                     stepSize: 1,
//                     suggestedMin: 10,
//                     suggestedMax: 25,
//                 }
//             }
//         }
//     }
// });

var ctx = document.getElementById('weatherChart').getContext('2d');

// Create a linear gradient for the line color
var gradientStroke = ctx.createLinearGradient(200, 1, 2, 20);
gradientStroke.addColorStop(0, 'rgba(54, 162, 235, 1)'); // Blue at the beginning
gradientStroke.addColorStop(1, 'rgba(255, 159, 64, 1)'); // Orange at the end

var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM', '12 AM', '2 AM', '4 AM', '6 AM', '8 AM'],
    datasets: [{
      label: 'Temperature',
      data: [20, 21, 21, 21, 21, 17, 15, 14, 13, 14, 12],
      backgroundColor: gradientStroke, // Set the gradient as background color
      borderColor: gradientStroke, // Set the gradient as border color
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

