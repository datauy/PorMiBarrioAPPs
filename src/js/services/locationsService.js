pmb_im.services.factory('LocationsService', [ function() {

  var locationsObj = {};
  locationsObj.initial_lat = "";
  locationsObj.initial_lng = "";
  locationsObj.new_report_lat = "";
  locationsObj.new_report_lng = "";
  locationsObj.council_modal = null;
  locationsObj.selected_council = null;

  locationsObj.selectCouncil = function(councilName) {
    locationsObj.selected_council =  councilName;
  }

  locationsObj.save_initial_position = function(position) {
    locationsObj.initial_lat =  position.coords.latitude;
    locationsObj.initial_lng =  position.coords.longitude;
  }

  locationsObj.save_new_report_position = function(lat,lng){
    locationsObj.new_report_lat = lat;
    locationsObj.new_report_lng = lng;
    locationsObj.initial_lat =  lat;
    locationsObj.initial_lng =  lng;
  }

  locationsObj.savedLocations = [];

  return locationsObj;

}]);
