ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11170394.328707, -82314.203581, 11216323.787479, -54054.277654]);
var wms_layers = [];


        var lyr_Googlesatellite_0 = new ol.layer.Tile({
            'title': 'Google satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_ADMINISTRASIKECAMATAN_AR_50K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_2 = format_ADMINISTRASIKECAMATAN_AR_50K_2.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_2.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_2);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_2, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_2,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_DanauSingkarakdanau_250k_143_3 = new ol.format.GeoJSON();
var features_DanauSingkarakdanau_250k_143_3 = format_DanauSingkarakdanau_250k_143_3.readFeatures(json_DanauSingkarakdanau_250k_143_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DanauSingkarakdanau_250k_143_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DanauSingkarakdanau_250k_143_3.addFeatures(features_DanauSingkarakdanau_250k_143_3);
var lyr_DanauSingkarakdanau_250k_143_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DanauSingkarakdanau_250k_143_3, 
                style: style_DanauSingkarakdanau_250k_143_3,
                popuplayertitle: 'Danau Singkarak — danau_250k_143',
                interactive: true,
                title: '<img src="styles/legend/DanauSingkarakdanau_250k_143_3.png" /> Danau Singkarak — danau_250k_143'
            });
var format_Nagari_4 = new ol.format.GeoJSON();
var features_Nagari_4 = format_Nagari_4.readFeatures(json_Nagari_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nagari_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nagari_4.addFeatures(features_Nagari_4);
var lyr_Nagari_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nagari_4, 
                style: style_Nagari_4,
                popuplayertitle: 'Nagari',
                interactive: true,
    title: 'Nagari<br />\
    <img src="styles/legend/Nagari_4_0.png" /> Aripan<br />\
    <img src="styles/legend/Nagari_4_1.png" /> Baka Sumani<br />\
    <img src="styles/legend/Nagari_4_2.png" /> Batu Taba<br />\
    <img src="styles/legend/Nagari_4_3.png" /> Guguak Malalo (Intake PLTA)<br />\
    <img src="styles/legend/Nagari_4_4.png" /> Muaro Pingai<br />\
    <img src="styles/legend/Nagari_4_5.png" /> Ombilin<br />\
    <img src="styles/legend/Nagari_4_6.png" /> Paninggahan<br />\
    <img src="styles/legend/Nagari_4_7.png" /> Saniang<br />\
    <img src="styles/legend/Nagari_4_8.png" /> Sumpur<br />' });

lyr_Googlesatellite_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_2.setVisible(true);lyr_DanauSingkarakdanau_250k_143_3.setVisible(true);lyr_Nagari_4.setVisible(true);
var layersList = [lyr_Googlesatellite_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_ADMINISTRASIKECAMATAN_AR_50K_2,lyr_DanauSingkarakdanau_250k_143_3,lyr_Nagari_4];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DanauSingkarakdanau_250k_143_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', });
lyr_Nagari_4.set('fieldAliases', {'id': 'id', 'Nagari': 'Nagari', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DanauSingkarakdanau_250k_143_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'OTODAN': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', });
lyr_Nagari_4.set('fieldImages', {'id': 'TextEdit', 'Nagari': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DanauSingkarakdanau_250k_143_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', });
lyr_Nagari_4.set('fieldLabels', {'id': 'no label', 'Nagari': 'no label', });
lyr_Nagari_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});