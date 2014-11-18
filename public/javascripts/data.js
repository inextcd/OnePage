  var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
  ]
  var ctx = [
    $("#chart-1")[0].getContext('2d'),
    $("#chart-2")[0].getContext('2d'),
    $("#chart-3")[0].getContext('2d'),
    $("#chart-4")[0].getContext('2d')
  ]

  var options = {}
  var myDoughnutChart = new Chart(ctx[0]).Doughnut(data,options)
  var myDoughnutChart = new Chart(ctx[1]).Doughnut(data,options)
  var myDoughnutChart = new Chart(ctx[2]).Doughnut(data,options)
  var myDoughnutChart = new Chart(ctx[3]).Doughnut(data,options)
