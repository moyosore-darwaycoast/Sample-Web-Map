var wms_layers = [];


        var lyr_CartoDBPositron_0 = new ol.layer.Tile({
            'title': 'CartoDB Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_USCitiesTimezone_2 = new ol.format.GeoJSON();
var features_USCitiesTimezone_2 = format_USCitiesTimezone_2.readFeatures(json_USCitiesTimezone_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USCitiesTimezone_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USCitiesTimezone_2.addFeatures(features_USCitiesTimezone_2);
var lyr_USCitiesTimezone_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_USCitiesTimezone_2, 
                style: style_USCitiesTimezone_2,
                popuplayertitle: "US Cities - Timezone",
                interactive: true,
    title: 'US Cities - Timezone<br />\
    <img src="styles/legend/USCitiesTimezone_2_0.png" /> America/Anchorage<br />\
    <img src="styles/legend/USCitiesTimezone_2_1.png" /> America/Boise<br />\
    <img src="styles/legend/USCitiesTimezone_2_2.png" /> America/Chicago<br />\
    <img src="styles/legend/USCitiesTimezone_2_3.png" /> America/Denver<br />\
    <img src="styles/legend/USCitiesTimezone_2_4.png" /> America/Detroit<br />\
    <img src="styles/legend/USCitiesTimezone_2_5.png" /> America/Indiana/Indianapolis<br />\
    <img src="styles/legend/USCitiesTimezone_2_6.png" /> America/Los_Angeles<br />\
    <img src="styles/legend/USCitiesTimezone_2_7.png" /> America/Matamoros<br />\
    <img src="styles/legend/USCitiesTimezone_2_8.png" /> America/New_York<br />\
    <img src="styles/legend/USCitiesTimezone_2_9.png" /> America/Phoenix<br />\
    <img src="styles/legend/USCitiesTimezone_2_10.png" /> America/Puerto_Rico<br />\
    <img src="styles/legend/USCitiesTimezone_2_11.png" /> Pacific/Honolulu<br />'
        });

lyr_CartoDBPositron_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_USCitiesTimezone_2.setVisible(true);
var layersList = [lyr_CartoDBPositron_0,lyr_OSMStandard_1,lyr_USCitiesTimezone_2];
lyr_USCitiesTimezone_2.set('fieldAliases', {'city': 'City', 'state_id': 'State', 'state_name': 'state_name', 'lat': 'lat', 'lng': 'lng', 'population': 'Population', 'density': 'Pop Density', 'timezone': 'Timezone', 'sunrise_lo': 'sunrise_lo', 'sunset_lon': 'sunset_lon', 'sunrise_sh': 'Sunrise', 'sunset_sho': 'Sunset', 'day_length': 'Daylight in hours', 'night_leng': 'Latest Sunset Time', });
lyr_USCitiesTimezone_2.set('fieldImages', {'city': 'TextEdit', 'state_id': 'TextEdit', 'state_name': 'Hidden', 'lat': 'Hidden', 'lng': 'Hidden', 'population': 'TextEdit', 'density': 'TextEdit', 'timezone': 'TextEdit', 'sunrise_lo': 'Hidden', 'sunset_lon': 'Hidden', 'sunrise_sh': 'TextEdit', 'sunset_sho': 'TextEdit', 'day_length': 'TextEdit', 'night_leng': 'TextEdit', });
lyr_USCitiesTimezone_2.set('fieldLabels', {'city': 'inline label - always visible', 'state_id': 'inline label - always visible', 'population': 'inline label - always visible', 'density': 'header label - visible with data', 'timezone': 'inline label - always visible', 'sunrise_sh': 'inline label - visible with data', 'sunset_sho': 'no label', 'day_length': 'inline label - visible with data', 'night_leng': 'no label', });
lyr_USCitiesTimezone_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});