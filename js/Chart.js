let Egy = document.getElementById('Egypt').getContext('2d');
let Uae = document.getElementById('UAE').getContext('2d');
let Ger = document.getElementById('Germany').getContext('2d');

//Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#777';

//Egypt Chart
let egyPopChart = new Chart(Egy, {
    type: 'bar', //bar, horizontalBar, pie, line, doughunt, radar, polarArea

    data: {
        labels: ['Cairo', 'Alexandria', 'Giza', 'Port Said', 'Suez', 'Al Mahallah al Kubra'],
        datasets: [{
            label: 'Population',
            data: [
                7734614,
                3811516,
                2443203,
                538378,
                488125,
                431052
            ],
            backgroundColor: [
                'rgba(255,99,132,0.6)',
                'rgba(54,162,235,0.6)',
                'rgba(255,206,86,0.6)',
                'rgba(75,192,192,0.6)',
                'rgba(153,102,255,0.6)',
                'rgba(255,159,64,0.6)',
                'rgba(255,99,132,0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Largest Cities In Egypt Population',
            fontSize: 21
        },
        legend: {
            position: 'right'
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    },
});

//United Arab Emirates Chart
let uaePopChart = new Chart(Uae, {
    type: 'horizontalBar', //bar, horizontalBar, pie, line, doughunt, radar, polarArea

    data: {
        labels: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Al Ain', 'Ajman', 'Ras al-Khaimah'],
        datasets: [{
            label: 'Population',
            data: [
                1137347,
                603492,
                543733,
                408733,
                226172,
                115949
            ],
            backgroundColor: [
                'rgba(255,99,100,0.6)',
                'rgba(54,162,100,0.6)',
                'rgba(255,206,100,0.6)',
                'rgba(75,192,100,0.6)',
                'rgba(153,102,100,0.6)',
                'rgba(255,159,100,0.6)',
                'rgba(255,99,100,0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Largest Cities In United Arab Emirates Population',
            fontSize: 21
        },
        legend: {
            position: 'right'
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//Germany Chart
let gerPopChart = new Chart(Ger, {
    type: 'line', //bar, horizontalBar, pie, line, doughunt, radar, polarArea

    data: {
        labels: ['Berlin', 'Hamburg', 'Munich', 'Koeln', 'Frankfurt am Main	', 'Essen'],
        datasets: [{
            label: 'Population',
            data: [
                3426354,
                1739117,
                1260391,
                963395,
                650000,
                593085
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Largest Cities In Germany Population',
            fontSize: 21
        },
        legend: {
            position: 'right'
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});