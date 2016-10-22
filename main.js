$(function (){
  $.ajax({
    type: "GET",
    url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson",
    //url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
    success: function(data){
      console.log(data);
      var template = $("#locations-template").html();
      var templateScript = Handlebars.compile(template);
      $('#sigdata').html(templateScript(data));
    }
  });

  $.ajax({
    type: "GET",
    url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson",
    //url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
    success: function(data){
      console.log(data);
      var template = $("#locations-template").html();
      var templateScript = Handlebars.compile(template);
      $('#m45data').html(templateScript(data));
    }
  });

  $.ajax({
    type: "GET",
    url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson",
    //url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
    success: function(data){
      console.log(data);
      var template = $("#locations-template").html();
      var templateScript = Handlebars.compile(template);
      $('#m25data').html(templateScript(data));
    }
  });

  $.ajax({
    type: "GET",
    url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson",
    //url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
    success: function(data){
      console.log(data);
      var template = $("#locations-template").html();
      var templateScript = Handlebars.compile(template);
      $('#m10data').html(templateScript(data));
    }
  });

  $.ajax({
    type: "GET",
    url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson",
    //url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
    success: function(data){
      console.log(data);
      var template = $("#locations-template").html();
      var templateScript = Handlebars.compile(template);
      $('#alldata').html(templateScript(data));
    }
  });

});
