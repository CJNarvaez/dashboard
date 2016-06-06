google.charts.load('current', {'packages':['corechart', 'controls']});

google.charts.setOnLoadCallback(loadData);

function loadData(){

  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1j_xtWMGX0lZCYU_XgONxCUPws5gc0LNAtFGxeUQfC10/edit?usp=sharing');
  query.setQuery('select A, C, D');
  query.send(drawDashboard);
}

function drawDashboard(response) {

  if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
  }
  var data = response.getDataTable();
/*
  // Create our data table.
  var data = google.visualization.arrayToDataTable([
    ['Municipio', 'Hombres'],
    ['Guadalupe' , 77843],
    ['Zacatecas', 66297]
  ]);*/

    var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_div'));

    var cantidadRangeSlider = new google.visualization.ControlWrapper({
      'controlType': 'NumberRangeFilter',
      'containerId': 'filtro_div',
      'options': {
        'filterColumnLabel': 'Hombres',
        'minValue': 30000,
        'maxValue': 80000
      },
      'state': {
        'lowValue': 50000,
        'highValue': 80000
      }
    });

    var municipioRangeSlider = new google.visualization.ControlWrapper({
      'controlType': 'CategoryFilter',
      'containerId': 'filtro_mun_div',
      'options': {
        'filterColumnLabel': 'Municipio'
      }
    });

    var pieChart = new google.visualization.ChartWrapper({
      'chartType': 'PieChart',
      'containerId': 'grafica_div',
      'options': {
        'width': 600,
        'height': 400,
        'minValue': 0,
        'legend': 'bottom',
        'title': 'Habitantes por Municipio',
        'vAxis': { 'minValue': 0 }
      },

    });

    dashboard.bind(cantidadRangeSlider, pieChart);
    dashboard.bind(municipioRangeSlider, pieChart);
    dashboard.draw(data);
}
