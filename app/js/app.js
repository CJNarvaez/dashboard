function loadData(){var e=new google.visualization.Query("https://docs.google.com/spreadsheets/d/1j_xtWMGX0lZCYU_XgONxCUPws5gc0LNAtFGxeUQfC10/edit?usp=sharing");e.setQuery("select A, C, D"),e.send(drawDashboard)}function drawDashboard(e){if(e.isError())return void alert("Error in query: "+e.getMessage()+" "+e.getDetailedMessage());var a=e.getDataTable(),o=new google.visualization.Dashboard(document.getElementById("dashboard_div")),t=new google.visualization.ControlWrapper({controlType:"NumberRangeFilter",containerId:"filtro_div",options:{filterColumnLabel:"Hombres",minValue:3e4,maxValue:8e4},state:{lowValue:5e4,highValue:8e4}}),i=new google.visualization.ControlWrapper({controlType:"CategoryFilter",containerId:"filtro_mun_div",options:{filterColumnLabel:"Municipio"}}),r=new google.visualization.ChartWrapper({chartType:"PieChart",containerId:"grafica_div",options:{width:600,height:400,minValue:0,legend:"bottom",title:"Habitantes por Municipio",vAxis:{minValue:0}}});o.bind(t,r),o.bind(i,r),o.draw(a)}google.charts.load("current",{packages:["corechart","controls"]}),google.charts.setOnLoadCallback(loadData);