var wms_layers = [];


        var lyr_GoogleSatellit_0 = new ol.layer.Tile({
            'title': 'Google Satellit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Survey_1 = new ol.format.GeoJSON();
var features_Survey_1 = format_Survey_1.readFeatures(json_Survey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Survey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Survey_1.addFeatures(features_Survey_1);
var lyr_Survey_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Survey_1, 
                style: style_Survey_1,
                popuplayertitle: 'Survey',
                interactive: true,
                title: '<img src="styles/legend/Survey_1.png" /> Survey'
            });

lyr_GoogleSatellit_0.setVisible(true);lyr_Survey_1.setVisible(true);
var layersList = [lyr_GoogleSatellit_0,lyr_Survey_1];
lyr_Survey_1.set('fieldAliases', {'fid': 'fid', 'date': 'Datum', 'notes': 'Kommentar', 'photo': 'Bild', 'nr': 'Nr', 'art': 'Art', 'storlek': 'DBH', 'vitalitet': 'Vitalitet', 'skador': 'Skador', 'risk': 'Risk', 'tidsatgang': 'Tidsåtgång', 'skyddsvart': 'Skyddsvärt träd', 'rek_atgard': 'Rekommenderad åtgärd', });
lyr_Survey_1.set('fieldImages', {'fid': 'Hidden', 'date': 'DateTime', 'notes': 'TextEdit', 'photo': 'ExternalResource', 'nr': 'TextEdit', 'art': 'TextEdit', 'storlek': 'Range', 'vitalitet': 'ValueMap', 'skador': 'ValueMap', 'risk': 'ValueMap', 'tidsatgang': 'Range', 'skyddsvart': 'ValueMap', 'rek_atgard': 'TextEdit', });
lyr_Survey_1.set('fieldLabels', {'date': 'hidden field', 'notes': 'hidden field', 'photo': 'header label - visible with data', 'nr': 'header label - visible with data', 'art': 'header label - visible with data', 'storlek': 'hidden field', 'vitalitet': 'hidden field', 'skador': 'hidden field', 'risk': 'hidden field', 'tidsatgang': 'hidden field', 'skyddsvart': 'hidden field', 'rek_atgard': 'header label - visible with data', });
lyr_Survey_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});