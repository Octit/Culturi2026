var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_culturi2026_2_1 = new ol.format.GeoJSON();
var features_culturi2026_2_1 = format_culturi2026_2_1.readFeatures(json_culturi2026_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_culturi2026_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_culturi2026_2_1.addFeatures(features_culturi2026_2_1);
var lyr_culturi2026_2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_culturi2026_2_1, 
                style: style_culturi2026_2_1,
                popuplayertitle: 'culturi2026_2',
                interactive: true,
    title: 'culturi2026_2<br />\
    <img src="styles/legend/culturi2026_2_1_0.png" /> <br />\
    <img src="styles/legend/culturi2026_2_1_1.png" /> 2025FLOAREA SOARELUI<br />\
    <img src="styles/legend/culturi2026_2_1_2.png" /> 2025GRÂU COMUN de toamnă<br />\
    <img src="styles/legend/culturi2026_2_1_3.png" /> 2025LUCERNÄ<br />\
    <img src="styles/legend/culturi2026_2_1_4.png" /> 2025MUSTAR<br />\
    <img src="styles/legend/culturi2026_2_1_5.png" /> 2025ORZ de toamnă<br />\
    <img src="styles/legend/culturi2026_2_1_6.png" /> 2025PORUMB<br />\
    <img src="styles/legend/culturi2026_2_1_7.png" /> 2025SORG<br />\
    <img src="styles/legend/culturi2026_2_1_8.png" /> 2025TEREN NECULTIVAT<br />\
    <img src="styles/legend/culturi2026_2_1_9.png" /> FLOAREA SOARELUI<br />\
    <img src="styles/legend/culturi2026_2_1_10.png" /> GRAU<br />\
    <img src="styles/legend/culturi2026_2_1_11.png" /> ORZ<br />\
    <img src="styles/legend/culturi2026_2_1_12.png" /> Primav<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_culturi2026_2_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_culturi2026_2_1];
lyr_culturi2026_2_1.set('fieldAliases', {'farm_id': 'farm_id', 'year': 'year', 'judet': 'judet', 'siruta': 'siruta', 'commune': 'commune', 'bloc_nr': 'bloc_nr', 'parcel_nr': 'parcel_nr', 'crop_nr': 'crop_nr', 'cat_use': 'cat_use', 'crop_code': 'crop_code', 'crop_name': 'crop_name', 'area_dec': 'area_dec', 'agro_env': 'agro_env', 'comment': 'comment', 'inserted': 'inserted', 'updated': 'updated', 'status': 'status', 'full_bloc': 'full_bloc', });
lyr_culturi2026_2_1.set('fieldImages', {'farm_id': 'TextEdit', 'year': 'TextEdit', 'judet': 'TextEdit', 'siruta': 'Range', 'commune': 'TextEdit', 'bloc_nr': 'Range', 'parcel_nr': 'Range', 'crop_nr': 'TextEdit', 'cat_use': 'TextEdit', 'crop_code': 'Range', 'crop_name': 'TextEdit', 'area_dec': 'TextEdit', 'agro_env': 'TextEdit', 'comment': 'TextEdit', 'inserted': 'DateTime', 'updated': 'DateTime', 'status': 'TextEdit', 'full_bloc': 'Range', });
lyr_culturi2026_2_1.set('fieldLabels', {'farm_id': 'no label', 'year': 'no label', 'judet': 'no label', 'siruta': 'no label', 'commune': 'inline label - always visible', 'bloc_nr': 'no label', 'parcel_nr': 'inline label - always visible', 'crop_nr': 'no label', 'cat_use': 'no label', 'crop_code': 'no label', 'crop_name': 'inline label - always visible', 'area_dec': 'no label', 'agro_env': 'no label', 'comment': 'no label', 'inserted': 'no label', 'updated': 'no label', 'status': 'no label', 'full_bloc': 'no label', });
lyr_culturi2026_2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});