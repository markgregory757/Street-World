import { countryInfo } from "./countryAPI.js";
import { countryArt } from "./streetArt.js";
import { generateFeatureCollection } from "./mapAPI.js";
import { createFeaturesGraphics } from "./mapAPI.js";
import { createFeatureLayerFromGraphic } from "./mapAPI.js";
import { addShapefileToMap } from "./mapAPI.js";



countryArt();
countryInfo();
generateFeatureCollection();
createFeaturesGraphics();
createFeatureLayerFromGraphic();
addShapefileToMap()