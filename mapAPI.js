


require([   // We use the "require" method to load modules from the JS library. 
"esri/Map", // loads code for creating a Map.
"esri/views/SceneView", // loads code for viewing the Map in 3D.
"esri/layers/TileLayer",
"esri/Basemap",
"esri/layers/FeatureLayer",
"esri/widgets/LayerList",
"esri/request",
"esri/Graphic",
"dojo/domReady!" // instructs the browser to wait on execution of the code until the entire page has been loaded
], 
// The next lines are callback functions these are called once all the code on the page has loaded. 
function (
Map,
SceneView,
TileLayer,
Basemap,
FeatureLayer,
LayerList,
request,
Graphic
) {		

// In this section we have the elements that store the layers displayed in the globe.  
		const satelliteLayer = new TileLayer({
			url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
			title: "satellite"
		  })

		  const fireflyLayer = new TileLayer({
			url: "https://tiles.arcgis.com/https://www.esri.com/arcgis-blog/products/arcgis-online/mapping/vintage-shaded-relief-basemap//nGt4QxSblgDfeJn9/arcgis/rest/services/HalfEarthFirefly/MapServer",
			title: "half-earth-firefly"
		  })

		  const basemap = new Basemap({
			baseLayers: [satelliteLayer, fireflyLayer],
			title: "half-earth-basemap",
			id: "half-earth-basemap"
		  });

		  const rangelands = new TileLayer({
			url: 'https://tiles.arcgis.com/tiles/IkktFdUAcY3WrH25/arcgis/rest/services/gHM_Rangeland_inverted/MapServer'
		  })

		  const protected = new FeatureLayer({
			url: 'https://services5.arcgis.com/Mj0hjvkNtV7NRhA7/arcgis/rest/services/WDPA_v0/FeatureServer/1'
		  })

// These lines set the basemap. 
		const map = new Map({
			basemap: basemap,
			layers: [protected, rangelands]
		});

// Here where we are using the browser's Web Graphics Library(webGL) to render a 3D image on the page,
// by creating instances to the "SceneView" Class. 
		const view = new SceneView({
			map: map,
			container: "sceneContainer", // this line sets it in the sceneContainer in the HTML page.
			environment: {
				atmosphereEnabled: false,
				background: {
				  type: "color",
				  color: [0,10,16]
				}
			},
			// ui: {
			// 	components: ["zoom"]
			//    }
		});
		const layerList = new LayerList({
			view: view
		  });
		  
		  view.ui.add(layerList, {
			position: "top-right"
		  });
		  const uploadForm = document.getElementById("uploadForm");

		  uploadForm.addEventListener("change", function (event) {
			const filePath = event.target.value.toLowerCase();
			//only accept .zip files
			if (filePath.indexOf(".zip") !== -1) {
				generateFeatureCollection(uploadForm)
				const generateRequestParams = {
					filetype: "shapefile",
					  publishParameters: JSON.stringify({
					  targetSR: view.spatialReference
					}),
					f: "json"
				  };
			} 
		  });
		
		  	function generateFeatureCollection(uploadFormNode) {
			  request("https://www.arcgis.com/sharing/rest/content/features/generate", { query: generateRequestParams, 
		  		body: uploadFormNode, 
		  		responseType: "json"
			}).then(function (response) {
				// we will have here available the feature collection 
				// inside the data object of the response object
				// response.data.featureCollection
				addShapefileToMap(response.data.featureCollection);
				  console.log(response)
				})
			}
			function createFeaturesGraphics(layer) {
				console.log(layer)
				return layer.featureSet.features.map(function (feature) {
				  return Graphic.fromJSON(feature);
				});
			  }
			  function createFeatureLayerFromGraphic(graphics) {
				return new FeatureLayer({
				  objectIdField: "FID",
				  source: graphics,
				  title: 'User uploaded shapefile'
				});
			  }
			  function addShapefileToMap(featureCollection) {
				let sourceGraphics = [];
				const collectionLayers = featureCollection.layers;
				const mapLayers = collectionLayers.map(function (layer) {
				  const graphics = createFeaturesGraphics(layer);
				  sourceGraphics = sourceGraphics.concat(graphics);
				  const featureLayer = createFeatureLayerFromGraphic(graphics)
				  return featureLayer;
				});
				map.addMany(mapLayers);
				view.goTo({target: sourceGraphics, tilt: 40});
			  }
	});

	// export {generateFeatureCollection};
	// export {createFeaturesGraphics};
	// export {createFeatureLayerFromGraphic};
	// export {addShapefileToMap};
	



