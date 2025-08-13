var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_departamentos_2 = new ol.format.GeoJSON();
var features_departamentos_2 = format_departamentos_2.readFeatures(json_departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_departamentos_2.addFeatures(features_departamentos_2);
var lyr_departamentos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_departamentos_2, 
                style: style_departamentos_2,
                popuplayertitle: 'departamentos',
                interactive: true,
    title: 'departamentos<br />\
    <img src="styles/legend/departamentos_2_0.png" /> ARTIGAS<br />\
    <img src="styles/legend/departamentos_2_1.png" /> CANELONES<br />\
    <img src="styles/legend/departamentos_2_2.png" /> CERRO LARGO<br />\
    <img src="styles/legend/departamentos_2_3.png" /> COLONIA<br />\
    <img src="styles/legend/departamentos_2_4.png" /> DURAZNO<br />\
    <img src="styles/legend/departamentos_2_5.png" /> FLORES<br />\
    <img src="styles/legend/departamentos_2_6.png" /> FLORIDA<br />\
    <img src="styles/legend/departamentos_2_7.png" /> LAVALLEJA<br />\
    <img src="styles/legend/departamentos_2_8.png" /> MALDONADO<br />\
    <img src="styles/legend/departamentos_2_9.png" /> MONTEVIDEO<br />\
    <img src="styles/legend/departamentos_2_10.png" /> PAYSANDU<br />\
    <img src="styles/legend/departamentos_2_11.png" /> RÃO NEGRO<br />\
    <img src="styles/legend/departamentos_2_12.png" /> RIVERA<br />\
    <img src="styles/legend/departamentos_2_13.png" /> ROCHA<br />\
    <img src="styles/legend/departamentos_2_14.png" /> SALTO<br />\
    <img src="styles/legend/departamentos_2_15.png" /> SAN JOSÃ<br />\
    <img src="styles/legend/departamentos_2_16.png" /> SORIANO<br />\
    <img src="styles/legend/departamentos_2_17.png" /> TACUAREMBO<br />\
    <img src="styles/legend/departamentos_2_18.png" /> TREINTA Y TRES<br />\
    <img src="styles/legend/departamentos_2_19.png" /> <br />' });
var format_parcelas_180_uruguay_paysandu_3 = new ol.format.GeoJSON();
var features_parcelas_180_uruguay_paysandu_3 = format_parcelas_180_uruguay_paysandu_3.readFeatures(json_parcelas_180_uruguay_paysandu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelas_180_uruguay_paysandu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelas_180_uruguay_paysandu_3.addFeatures(features_parcelas_180_uruguay_paysandu_3);
var lyr_parcelas_180_uruguay_paysandu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelas_180_uruguay_paysandu_3, 
                style: style_parcelas_180_uruguay_paysandu_3,
                popuplayertitle: 'parcelas_180_uruguay_paysandu',
                interactive: true,
                title: '<img src="styles/legend/parcelas_180_uruguay_paysandu_3.png" /> parcelas_180_uruguay_paysandu'
            });
var format_v_camineria_nacional_4 = new ol.format.GeoJSON();
var features_v_camineria_nacional_4 = format_v_camineria_nacional_4.readFeatures(json_v_camineria_nacional_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_v_camineria_nacional_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_v_camineria_nacional_4.addFeatures(features_v_camineria_nacional_4);
var lyr_v_camineria_nacional_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_v_camineria_nacional_4, 
                style: style_v_camineria_nacional_4,
                popuplayertitle: 'v_camineria_nacional',
                interactive: true,
    title: 'v_camineria_nacional<br />\
    <img src="styles/legend/v_camineria_nacional_4_0.png" /> CAMINER�A DEPARTAMENTAL<br />\
    <img src="styles/legend/v_camineria_nacional_4_1.png" /> CONEXI�N<br />\
    <img src="styles/legend/v_camineria_nacional_4_2.png" /> CORREDOR INTERNACIONAL<br />\
    <img src="styles/legend/v_camineria_nacional_4_3.png" /> RUTA PRIMARIA<br />\
    <img src="styles/legend/v_camineria_nacional_4_4.png" /> RUTA SECUNDARIA<br />\
    <img src="styles/legend/v_camineria_nacional_4_5.png" /> RUTA TERCIARIA<br />\
    <img src="styles/legend/v_camineria_nacional_4_6.png" /> SERVICIOS<br />\
    <img src="styles/legend/v_camineria_nacional_4_7.png" /> SIN CATEGOR�A<br />\
    <img src="styles/legend/v_camineria_nacional_4_8.png" /> <br />' });
var format_uylcami1g_sd_5 = new ol.format.GeoJSON();
var features_uylcami1g_sd_5 = format_uylcami1g_sd_5.readFeatures(json_uylcami1g_sd_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uylcami1g_sd_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uylcami1g_sd_5.addFeatures(features_uylcami1g_sd_5);
var lyr_uylcami1g_sd_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_uylcami1g_sd_5, 
                style: style_uylcami1g_sd_5,
                popuplayertitle: 'uylcami1g_sd',
                interactive: true,
    title: 'uylcami1g_sd<br />\
    <img src="styles/legend/uylcami1g_sd_5_0.png" /> Corredor Internacional<br />\
    <img src="styles/legend/uylcami1g_sd_5_1.png" /> Ruta Primaria<br />\
    <img src="styles/legend/uylcami1g_sd_5_2.png" /> Ruta Secundaria<br />\
    <img src="styles/legend/uylcami1g_sd_5_3.png" /> Ruta Terciaria<br />\
    <img src="styles/legend/uylcami1g_sd_5_4.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_departamentos_2.setVisible(true);lyr_parcelas_180_uruguay_paysandu_3.setVisible(true);lyr_v_camineria_nacional_4.setVisible(true);lyr_uylcami1g_sd_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatelliteHybrid_1,lyr_departamentos_2,lyr_parcelas_180_uruguay_paysandu_3,lyr_v_camineria_nacional_4,lyr_uylcami1g_sd_5];
lyr_departamentos_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'DEPTO': 'DEPTO', 'DESCRIPCIO': 'DESCRIPCIO', 'DEF': 'DEF', 'SHAPE_Leng': 'SHAPE_Leng', 'TXT': 'TXT', 'OBS': 'OBS', 'FCODE': 'FCODE', 'ACC': 'ACC', 'USE_': 'USE_', 'GlobalID': 'GlobalID', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Shape_STLe': 'Shape_STLe', });
lyr_parcelas_180_uruguay_paysandu_3.set('fieldAliases', {'fid': 'fid', 'area_ha': 'area_ha', 'departamento': 'departamento', 'DEPTO': 'DEPTO', });
lyr_v_camineria_nacional_4.set('fieldAliases', {'gid': 'gid', 'codigo': 'codigo', 'numero': 'numero', 'nombre': 'nombre', 'depto': 'depto', 'jurisdicci': 'jurisdicci', 'categoria': 'categoria', 'sentido': 'sentido', 'carriles': 'carriles', 'calzada': 'calzada', 'fuente': 'fuente', 'observacio': 'observacio', 'nat_juridi': 'nat_juridi', });
lyr_uylcami1g_sd_5.set('fieldAliases', {'numero': 'numero', 'nombre': 'nombre', 'depto1': 'depto1', 'categoriza': 'categoriza', 'nom_sd': 'nom_sd', });
lyr_departamentos_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'DEPTO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'DEF': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'TXT': 'TextEdit', 'OBS': 'TextEdit', 'FCODE': 'TextEdit', 'ACC': 'TextEdit', 'USE_': 'TextEdit', 'GlobalID': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'Shape_STLe': 'TextEdit', });
lyr_parcelas_180_uruguay_paysandu_3.set('fieldImages', {'fid': 'TextEdit', 'area_ha': 'TextEdit', 'departamento': 'TextEdit', 'DEPTO': 'TextEdit', });
lyr_v_camineria_nacional_4.set('fieldImages', {'gid': 'Range', 'codigo': 'TextEdit', 'numero': 'Range', 'nombre': 'TextEdit', 'depto': 'TextEdit', 'jurisdicci': 'TextEdit', 'categoria': 'TextEdit', 'sentido': 'TextEdit', 'carriles': 'TextEdit', 'calzada': 'TextEdit', 'fuente': 'TextEdit', 'observacio': 'TextEdit', 'nat_juridi': 'TextEdit', });
lyr_uylcami1g_sd_5.set('fieldImages', {'numero': 'TextEdit', 'nombre': 'TextEdit', 'depto1': 'TextEdit', 'categoriza': 'TextEdit', 'nom_sd': 'TextEdit', });
lyr_departamentos_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'DEPTO': 'inline label - always visible', 'DESCRIPCIO': 'no label', 'DEF': 'no label', 'SHAPE_Leng': 'no label', 'TXT': 'no label', 'OBS': 'no label', 'FCODE': 'no label', 'ACC': 'no label', 'USE_': 'no label', 'GlobalID': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Shape_STLe': 'no label', });
lyr_parcelas_180_uruguay_paysandu_3.set('fieldLabels', {'fid': 'no label', 'area_ha': 'inline label - always visible', 'departamento': 'no label', 'DEPTO': 'no label', });
lyr_v_camineria_nacional_4.set('fieldLabels', {'gid': 'no label', 'codigo': 'no label', 'numero': 'no label', 'nombre': 'inline label - always visible', 'depto': 'inline label - always visible', 'jurisdicci': 'inline label - always visible', 'categoria': 'inline label - always visible', 'sentido': 'inline label - always visible', 'carriles': 'inline label - always visible', 'calzada': 'inline label - always visible', 'fuente': 'no label', 'observacio': 'inline label - always visible', 'nat_juridi': 'no label', });
lyr_uylcami1g_sd_5.set('fieldLabels', {'numero': 'no label', 'nombre': 'inline label - always visible', 'depto1': 'no label', 'categoriza': 'inline label - always visible', 'nom_sd': 'no label', });
lyr_uylcami1g_sd_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});