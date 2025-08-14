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
var format_deptos_poli_corregidos_2 = new ol.format.GeoJSON();
var features_deptos_poli_corregidos_2 = format_deptos_poli_corregidos_2.readFeatures(json_deptos_poli_corregidos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deptos_poli_corregidos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deptos_poli_corregidos_2.addFeatures(features_deptos_poli_corregidos_2);
var lyr_deptos_poli_corregidos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_deptos_poli_corregidos_2, 
                style: style_deptos_poli_corregidos_2,
                popuplayertitle: 'deptos_poli_corregidos',
                interactive: true,
    title: 'deptos_poli_corregidos<br />\
    <img src="styles/legend/deptos_poli_corregidos_2_0.png" /> ARTIGAS<br />\
    <img src="styles/legend/deptos_poli_corregidos_2_1.png" /> CERRO LARGO<br />\
    <img src="styles/legend/deptos_poli_corregidos_2_2.png" /> COLONIA<br />\
    <img src="styles/legend/deptos_poli_corregidos_2_3.png" /> FLORES<br />\
    <img src="styles/legend/deptos_poli_corregidos_2_4.png" /> FLORIDA<br />\
    <img src="styles/legend/deptos_poli_corregidos_2_5.png" /> MONTEVIDEO<br />\
    <img src="styles/legend/deptos_poli_corregidos_2_6.png" /> PAYSANDU<br />\
    <img src="styles/legend/deptos_poli_corregidos_2_7.png" /> RÃO NEGRO<br />\
    <img src="styles/legend/deptos_poli_corregidos_2_8.png" /> ROCHA<br />\
    <img src="styles/legend/deptos_poli_corregidos_2_9.png" /> SALTO<br />\
    <img src="styles/legend/deptos_poli_corregidos_2_10.png" /> SORIANO<br />\
    <img src="styles/legend/deptos_poli_corregidos_2_11.png" /> TACUAREMBO<br />\
    <img src="styles/legend/deptos_poli_corregidos_2_12.png" /> TREINTA Y TRES<br />\
    <img src="styles/legend/deptos_poli_corregidos_2_13.png" /> <br />' });
var format_zona_deseada_3 = new ol.format.GeoJSON();
var features_zona_deseada_3 = format_zona_deseada_3.readFeatures(json_zona_deseada_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_deseada_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_deseada_3.addFeatures(features_zona_deseada_3);
var lyr_zona_deseada_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_deseada_3, 
                style: style_zona_deseada_3,
                popuplayertitle: 'zona_deseada',
                interactive: true,
                title: '<img src="styles/legend/zona_deseada_3.png" /> zona_deseada'
            });
var format_Buffer_ruta_03_4 = new ol.format.GeoJSON();
var features_Buffer_ruta_03_4 = format_Buffer_ruta_03_4.readFeatures(json_Buffer_ruta_03_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer_ruta_03_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_ruta_03_4.addFeatures(features_Buffer_ruta_03_4);
var lyr_Buffer_ruta_03_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer_ruta_03_4, 
                style: style_Buffer_ruta_03_4,
                popuplayertitle: 'Buffer_ruta_03',
                interactive: true,
                title: '<img src="styles/legend/Buffer_ruta_03_4.png" /> Buffer_ruta_03'
            });
var format_buffer_san_francisco_grande_5 = new ol.format.GeoJSON();
var features_buffer_san_francisco_grande_5 = format_buffer_san_francisco_grande_5.readFeatures(json_buffer_san_francisco_grande_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_san_francisco_grande_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_san_francisco_grande_5.addFeatures(features_buffer_san_francisco_grande_5);
var lyr_buffer_san_francisco_grande_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_san_francisco_grande_5, 
                style: style_buffer_san_francisco_grande_5,
                popuplayertitle: 'buffer_san_francisco_grande',
                interactive: true,
                title: '<img src="styles/legend/buffer_san_francisco_grande_5.png" /> buffer_san_francisco_grande'
            });
var format_rural_180_deptocorregido_6 = new ol.format.GeoJSON();
var features_rural_180_deptocorregido_6 = format_rural_180_deptocorregido_6.readFeatures(json_rural_180_deptocorregido_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rural_180_deptocorregido_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rural_180_deptocorregido_6.addFeatures(features_rural_180_deptocorregido_6);
var lyr_rural_180_deptocorregido_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rural_180_deptocorregido_6, 
                style: style_rural_180_deptocorregido_6,
                popuplayertitle: 'rural_180_deptocorregido',
                interactive: true,
                title: '<img src="styles/legend/rural_180_deptocorregido_6.png" /> rural_180_deptocorregido'
            });
var format_Zona_D02_7 = new ol.format.GeoJSON();
var features_Zona_D02_7 = format_Zona_D02_7.readFeatures(json_Zona_D02_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_D02_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_D02_7.addFeatures(features_Zona_D02_7);
var lyr_Zona_D02_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_D02_7, 
                style: style_Zona_D02_7,
                popuplayertitle: 'Zona_D02',
                interactive: true,
                title: '<img src="styles/legend/Zona_D02_7.png" /> Zona_D02'
            });
var format_Zona_D01_8 = new ol.format.GeoJSON();
var features_Zona_D01_8 = format_Zona_D01_8.readFeatures(json_Zona_D01_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona_D01_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona_D01_8.addFeatures(features_Zona_D01_8);
var lyr_Zona_D01_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona_D01_8, 
                style: style_Zona_D01_8,
                popuplayertitle: 'Zona_D01',
                interactive: true,
                title: '<img src="styles/legend/Zona_D01_8.png" /> Zona_D01'
            });
var format_cursos_agua_9 = new ol.format.GeoJSON();
var features_cursos_agua_9 = format_cursos_agua_9.readFeatures(json_cursos_agua_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cursos_agua_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cursos_agua_9.addFeatures(features_cursos_agua_9);
var lyr_cursos_agua_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cursos_agua_9, 
                style: style_cursos_agua_9,
                popuplayertitle: 'cursos_agua',
                interactive: true,
                title: '<img src="styles/legend/cursos_agua_9.png" /> cursos_agua'
            });
var format_via_prin_act_10 = new ol.format.GeoJSON();
var features_via_prin_act_10 = format_via_prin_act_10.readFeatures(json_via_prin_act_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_via_prin_act_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_via_prin_act_10.addFeatures(features_via_prin_act_10);
var lyr_via_prin_act_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_via_prin_act_10, 
                style: style_via_prin_act_10,
                popuplayertitle: 'via_prin_act',
                interactive: true,
                title: '<img src="styles/legend/via_prin_act_10.png" /> via_prin_act'
            });
var format_via_sec_11 = new ol.format.GeoJSON();
var features_via_sec_11 = format_via_sec_11.readFeatures(json_via_sec_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_via_sec_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_via_sec_11.addFeatures(features_via_sec_11);
var lyr_via_sec_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_via_sec_11, 
                style: style_via_sec_11,
                popuplayertitle: 'via_sec',
                interactive: true,
                title: '<img src="styles/legend/via_sec_11.png" /> via_sec'
            });
var format_rios_12 = new ol.format.GeoJSON();
var features_rios_12 = format_rios_12.readFeatures(json_rios_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios_12.addFeatures(features_rios_12);
var lyr_rios_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rios_12, 
                style: style_rios_12,
                popuplayertitle: 'rios',
                interactive: true,
                title: '<img src="styles/legend/rios_12.png" /> rios'
            });
var format_v_camineria_nacional_13 = new ol.format.GeoJSON();
var features_v_camineria_nacional_13 = format_v_camineria_nacional_13.readFeatures(json_v_camineria_nacional_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_v_camineria_nacional_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_v_camineria_nacional_13.addFeatures(features_v_camineria_nacional_13);
var lyr_v_camineria_nacional_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_v_camineria_nacional_13, 
                style: style_v_camineria_nacional_13,
                popuplayertitle: 'v_camineria_nacional',
                interactive: true,
    title: 'v_camineria_nacional<br />\
    <img src="styles/legend/v_camineria_nacional_13_0.png" /> CAMINER�A DEPARTAMENTAL<br />\
    <img src="styles/legend/v_camineria_nacional_13_1.png" /> CONEXI�N<br />\
    <img src="styles/legend/v_camineria_nacional_13_2.png" /> CORREDOR INTERNACIONAL<br />\
    <img src="styles/legend/v_camineria_nacional_13_3.png" /> RUTA PRIMARIA<br />\
    <img src="styles/legend/v_camineria_nacional_13_4.png" /> RUTA SECUNDARIA<br />\
    <img src="styles/legend/v_camineria_nacional_13_5.png" /> RUTA TERCIARIA<br />\
    <img src="styles/legend/v_camineria_nacional_13_6.png" /> SERVICIOS<br />\
    <img src="styles/legend/v_camineria_nacional_13_7.png" /> SIN CATEGOR�A<br />\
    <img src="styles/legend/v_camineria_nacional_13_8.png" /> <br />' });
var format_uylcami1g_sd_14 = new ol.format.GeoJSON();
var features_uylcami1g_sd_14 = format_uylcami1g_sd_14.readFeatures(json_uylcami1g_sd_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uylcami1g_sd_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uylcami1g_sd_14.addFeatures(features_uylcami1g_sd_14);
var lyr_uylcami1g_sd_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_uylcami1g_sd_14, 
                style: style_uylcami1g_sd_14,
                popuplayertitle: 'uylcami1g_sd',
                interactive: true,
    title: 'uylcami1g_sd<br />\
    <img src="styles/legend/uylcami1g_sd_14_0.png" /> Corredor Internacional<br />\
    <img src="styles/legend/uylcami1g_sd_14_1.png" /> Ruta Primaria<br />\
    <img src="styles/legend/uylcami1g_sd_14_2.png" /> Ruta Secundaria<br />\
    <img src="styles/legend/uylcami1g_sd_14_3.png" /> Ruta Terciaria<br />\
    <img src="styles/legend/uylcami1g_sd_14_4.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_deptos_poli_corregidos_2.setVisible(true);lyr_zona_deseada_3.setVisible(true);lyr_Buffer_ruta_03_4.setVisible(true);lyr_buffer_san_francisco_grande_5.setVisible(true);lyr_rural_180_deptocorregido_6.setVisible(true);lyr_Zona_D02_7.setVisible(true);lyr_Zona_D01_8.setVisible(true);lyr_cursos_agua_9.setVisible(true);lyr_via_prin_act_10.setVisible(true);lyr_via_sec_11.setVisible(true);lyr_rios_12.setVisible(true);lyr_v_camineria_nacional_13.setVisible(true);lyr_uylcami1g_sd_14.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatelliteHybrid_1,lyr_deptos_poli_corregidos_2,lyr_zona_deseada_3,lyr_Buffer_ruta_03_4,lyr_buffer_san_francisco_grande_5,lyr_rural_180_deptocorregido_6,lyr_Zona_D02_7,lyr_Zona_D01_8,lyr_cursos_agua_9,lyr_via_prin_act_10,lyr_via_sec_11,lyr_rios_12,lyr_v_camineria_nacional_13,lyr_uylcami1g_sd_14];
lyr_deptos_poli_corregidos_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'DEPTO': 'DEPTO', 'DESCRIPCIO': 'DESCRIPCIO', 'DEF': 'DEF', 'SHAPE_Leng': 'SHAPE_Leng', 'TXT': 'TXT', 'OBS': 'OBS', 'FCODE': 'FCODE', 'ACC': 'ACC', 'USE_': 'USE_', 'GlobalID': 'GlobalID', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Shape_STLe': 'Shape_STLe', });
lyr_zona_deseada_3.set('fieldAliases', {'fid': 'fid', });
lyr_Buffer_ruta_03_4.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'codigo': 'codigo', 'numero': 'numero', 'nombre': 'nombre', 'depto': 'depto', 'jurisdicci': 'jurisdicci', 'categoria': 'categoria', 'sentido': 'sentido', 'carriles': 'carriles', 'calzada': 'calzada', 'fuente': 'fuente', 'observacio': 'observacio', 'nat_juridi': 'nat_juridi', });
lyr_buffer_san_francisco_grande_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nombre': 'nombre', 'nav_flot': 'nav_flot', 'length': 'length', 'popup': 'popup', });
lyr_rural_180_deptocorregido_6.set('fieldAliases', {'fid': 'fid', 'area_ha': 'area_ha', 'fid_2': 'fid_2', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'DEPTO': 'DEPTO', 'DESCRIPCIO': 'DESCRIPCIO', 'DEF': 'DEF', 'SHAPE_Leng': 'SHAPE_Leng', 'TXT': 'TXT', 'OBS': 'OBS', 'FCODE': 'FCODE', 'ACC': 'ACC', 'USE_': 'USE_', 'GlobalID': 'GlobalID', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Shape_STLe': 'Shape_STLe', });
lyr_Zona_D02_7.set('fieldAliases', {'fid': 'fid', 'area_ha': 'area_ha', 'fid_2': 'fid_2', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'DEPTO': 'DEPTO', 'DESCRIPCIO': 'DESCRIPCIO', 'DEF': 'DEF', 'SHAPE_Leng': 'SHAPE_Leng', 'TXT': 'TXT', 'OBS': 'OBS', 'FCODE': 'FCODE', 'ACC': 'ACC', 'USE_': 'USE_', 'GlobalID': 'GlobalID', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Shape_STLe': 'Shape_STLe', 'fid_3': 'fid_3', });
lyr_Zona_D01_8.set('fieldAliases', {'fid': 'fid', 'area_ha': 'area_ha', 'fid_2': 'fid_2', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'DEPTO': 'DEPTO', 'DESCRIPCIO': 'DESCRIPCIO', 'DEF': 'DEF', 'SHAPE_Leng': 'SHAPE_Leng', 'TXT': 'TXT', 'OBS': 'OBS', 'FCODE': 'FCODE', 'ACC': 'ACC', 'USE_': 'USE_', 'GlobalID': 'GlobalID', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Shape_STLe': 'Shape_STLe', 'fid_3': 'fid_3', 'fid_4': 'fid_4', });
lyr_cursos_agua_9.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'nav_flot': 'nav_flot', 'length': 'length', 'popup': 'popup', });
lyr_via_prin_act_10.set('fieldAliases', {'id': 'id', 'nom_linea': 'nom_linea', 'conservaci': 'conservaci', 'toneladas': 'toneladas', 'velocidad': 'velocidad', 'estado': 'estado', 'observacio': 'observacio', });
lyr_via_sec_11.set('fieldAliases', {'id': 'id', 'no_de_via': 'no_de_via', 'nom_linea': 'nom_linea', 'nom_estaci': 'nom_estaci', 'conservaci': 'conservaci', 'estado': 'estado', 'velocidad': 'velocidad', 'toneladas': 'toneladas', 'observacio': 'observacio', 'descriptor': 'descriptor', });
lyr_rios_12.set('fieldAliases', {'nombre': 'nombre', 'regimen': 'regimen', 'fc_res': 'fc_res', });
lyr_v_camineria_nacional_13.set('fieldAliases', {'gid': 'gid', 'codigo': 'codigo', 'numero': 'numero', 'nombre': 'nombre', 'depto': 'depto', 'jurisdicci': 'jurisdicci', 'categoria': 'categoria', 'sentido': 'sentido', 'carriles': 'carriles', 'calzada': 'calzada', 'fuente': 'fuente', 'observacio': 'observacio', 'nat_juridi': 'nat_juridi', });
lyr_uylcami1g_sd_14.set('fieldAliases', {'numero': 'numero', 'nombre': 'nombre', 'depto1': 'depto1', 'categoriza': 'categoriza', 'nom_sd': 'nom_sd', });
lyr_deptos_poli_corregidos_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'DEPTO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'DEF': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'TXT': 'TextEdit', 'OBS': 'TextEdit', 'FCODE': 'TextEdit', 'ACC': 'TextEdit', 'USE_': 'TextEdit', 'GlobalID': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'Shape_STLe': 'TextEdit', });
lyr_zona_deseada_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_Buffer_ruta_03_4.set('fieldImages', {'fid': 'TextEdit', 'gid': 'Range', 'codigo': 'TextEdit', 'numero': 'Range', 'nombre': 'TextEdit', 'depto': 'TextEdit', 'jurisdicci': 'TextEdit', 'categoria': 'TextEdit', 'sentido': 'TextEdit', 'carriles': 'TextEdit', 'calzada': 'TextEdit', 'fuente': 'TextEdit', 'observacio': 'TextEdit', 'nat_juridi': 'TextEdit', });
lyr_buffer_san_francisco_grande_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'nombre': 'TextEdit', 'nav_flot': 'TextEdit', 'length': 'TextEdit', 'popup': 'TextEdit', });
lyr_rural_180_deptocorregido_6.set('fieldImages', {'fid': '', 'area_ha': '', 'fid_2': '', 'OBJECTID_1': '', 'OBJECTID': '', 'DEPTO': '', 'DESCRIPCIO': '', 'DEF': '', 'SHAPE_Leng': '', 'TXT': '', 'OBS': '', 'FCODE': '', 'ACC': '', 'USE_': '', 'GlobalID': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'Shape_STLe': '', });
lyr_Zona_D02_7.set('fieldImages', {'fid': '', 'area_ha': '', 'fid_2': '', 'OBJECTID_1': '', 'OBJECTID': '', 'DEPTO': '', 'DESCRIPCIO': '', 'DEF': '', 'SHAPE_Leng': '', 'TXT': '', 'OBS': '', 'FCODE': '', 'ACC': '', 'USE_': '', 'GlobalID': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'Shape_STLe': '', 'fid_3': '', });
lyr_Zona_D01_8.set('fieldImages', {'fid': 'TextEdit', 'area_ha': 'TextEdit', 'fid_2': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'DEPTO': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'DEF': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'TXT': 'TextEdit', 'OBS': 'TextEdit', 'FCODE': 'TextEdit', 'ACC': 'TextEdit', 'USE_': 'TextEdit', 'GlobalID': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'Shape_STLe': 'TextEdit', 'fid_3': 'TextEdit', 'fid_4': 'TextEdit', });
lyr_cursos_agua_9.set('fieldImages', {'id': '', 'nombre': '', 'nav_flot': '', 'length': '', 'popup': '', });
lyr_via_prin_act_10.set('fieldImages', {'id': 'TextEdit', 'nom_linea': 'TextEdit', 'conservaci': 'TextEdit', 'toneladas': 'TextEdit', 'velocidad': 'TextEdit', 'estado': 'TextEdit', 'observacio': 'TextEdit', });
lyr_via_sec_11.set('fieldImages', {'id': 'TextEdit', 'no_de_via': 'TextEdit', 'nom_linea': 'TextEdit', 'nom_estaci': 'TextEdit', 'conservaci': 'TextEdit', 'estado': 'TextEdit', 'velocidad': 'TextEdit', 'toneladas': 'TextEdit', 'observacio': 'TextEdit', 'descriptor': 'TextEdit', });
lyr_rios_12.set('fieldImages', {'nombre': 'TextEdit', 'regimen': 'TextEdit', 'fc_res': 'DateTime', });
lyr_v_camineria_nacional_13.set('fieldImages', {'gid': 'Range', 'codigo': 'TextEdit', 'numero': 'Range', 'nombre': 'TextEdit', 'depto': 'TextEdit', 'jurisdicci': 'TextEdit', 'categoria': 'TextEdit', 'sentido': 'TextEdit', 'carriles': 'TextEdit', 'calzada': 'TextEdit', 'fuente': 'TextEdit', 'observacio': 'TextEdit', 'nat_juridi': 'TextEdit', });
lyr_uylcami1g_sd_14.set('fieldImages', {'numero': 'TextEdit', 'nombre': 'TextEdit', 'depto1': 'TextEdit', 'categoriza': 'TextEdit', 'nom_sd': 'TextEdit', });
lyr_deptos_poli_corregidos_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'DEPTO': 'inline label - always visible', 'DESCRIPCIO': 'no label', 'DEF': 'no label', 'SHAPE_Leng': 'no label', 'TXT': 'no label', 'OBS': 'no label', 'FCODE': 'no label', 'ACC': 'no label', 'USE_': 'no label', 'GlobalID': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Shape_STLe': 'no label', });
lyr_zona_deseada_3.set('fieldLabels', {'fid': 'no label', });
lyr_Buffer_ruta_03_4.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'codigo': 'no label', 'numero': 'no label', 'nombre': 'inline label - always visible', 'depto': 'no label', 'jurisdicci': 'no label', 'categoria': 'no label', 'sentido': 'no label', 'carriles': 'no label', 'calzada': 'no label', 'fuente': 'no label', 'observacio': 'no label', 'nat_juridi': 'no label', });
lyr_buffer_san_francisco_grande_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nombre': 'no label', 'nav_flot': 'no label', 'length': 'no label', 'popup': 'no label', });
lyr_rural_180_deptocorregido_6.set('fieldLabels', {'fid': 'no label', 'area_ha': 'inline label - always visible', 'fid_2': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'DEPTO': 'inline label - always visible', 'DESCRIPCIO': 'inline label - always visible', 'DEF': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'TXT': 'inline label - always visible', 'OBS': 'inline label - always visible', 'FCODE': 'no label', 'ACC': 'no label', 'USE_': 'no label', 'GlobalID': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Shape_STLe': 'no label', });
lyr_Zona_D02_7.set('fieldLabels', {'fid': 'no label', 'area_ha': 'inline label - always visible', 'fid_2': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'DEPTO': 'no label', 'DESCRIPCIO': 'no label', 'DEF': 'no label', 'SHAPE_Leng': 'no label', 'TXT': 'no label', 'OBS': 'no label', 'FCODE': 'no label', 'ACC': 'no label', 'USE_': 'no label', 'GlobalID': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Shape_STLe': 'no label', 'fid_3': 'no label', });
lyr_Zona_D01_8.set('fieldLabels', {'fid': 'no label', 'area_ha': 'inline label - always visible', 'fid_2': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'DEPTO': 'no label', 'DESCRIPCIO': 'no label', 'DEF': 'no label', 'SHAPE_Leng': 'no label', 'TXT': 'no label', 'OBS': 'no label', 'FCODE': 'no label', 'ACC': 'no label', 'USE_': 'no label', 'GlobalID': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'Shape_STLe': 'no label', 'fid_3': 'no label', 'fid_4': 'no label', });
lyr_cursos_agua_9.set('fieldLabels', {'id': 'no label', 'nombre': 'inline label - always visible', 'nav_flot': 'inline label - always visible', 'length': 'inline label - always visible', 'popup': 'no label', });
lyr_via_prin_act_10.set('fieldLabels', {'id': 'no label', 'nom_linea': 'inline label - always visible', 'conservaci': 'inline label - always visible', 'toneladas': 'inline label - always visible', 'velocidad': 'inline label - always visible', 'estado': 'inline label - always visible', 'observacio': 'inline label - always visible', });
lyr_via_sec_11.set('fieldLabels', {'id': 'no label', 'no_de_via': 'inline label - always visible', 'nom_linea': 'inline label - always visible', 'nom_estaci': 'inline label - always visible', 'conservaci': 'inline label - always visible', 'estado': 'inline label - always visible', 'velocidad': 'inline label - always visible', 'toneladas': 'inline label - always visible', 'observacio': 'inline label - always visible', 'descriptor': 'no label', });
lyr_rios_12.set('fieldLabels', {'nombre': 'inline label - always visible', 'regimen': 'inline label - always visible', 'fc_res': 'no label', });
lyr_v_camineria_nacional_13.set('fieldLabels', {'gid': 'no label', 'codigo': 'no label', 'numero': 'inline label - always visible', 'nombre': 'inline label - always visible', 'depto': 'inline label - always visible', 'jurisdicci': 'inline label - always visible', 'categoria': 'inline label - always visible', 'sentido': 'inline label - always visible', 'carriles': 'inline label - always visible', 'calzada': 'inline label - always visible', 'fuente': 'inline label - always visible', 'observacio': 'no label', 'nat_juridi': 'no label', });
lyr_uylcami1g_sd_14.set('fieldLabels', {'numero': 'no label', 'nombre': 'inline label - always visible', 'depto1': 'inline label - always visible', 'categoriza': 'inline label - always visible', 'nom_sd': 'no label', });
lyr_uylcami1g_sd_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});