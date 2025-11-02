import { LiteAPI } from "liteapi-map-sdk";
import "liteapi-map-sdk/dist/liteapi-map-sdk.css";

const map1 = LiteAPI.Map.init({
  placeId: "ChIJYeZuBI9YwokRjMDs_IEyCwo",
  proxyDomain: "lite-api-proxy.vercel.app",
  selector: "#app1",
});

const map2 = LiteAPI.Map.init({
  placeId: "ChIJW-T2Wt7Gt4kRKl2I1CJFUsI",
  proxyDomain: "lite-api-proxy.vercel.app",
  selector: "#app2",
});

{
  let heatmapEnabled = true;
  document.querySelector("#toggleHeatmap1")?.addEventListener("click", () => {
    heatmapEnabled = !heatmapEnabled;
    map1.toggleMapHeatmap(heatmapEnabled);
  });
}

{
  let heatmapEnabled = true;
  document.querySelector("#toggleHeatmap2")?.addEventListener("click", () => {
    heatmapEnabled = !heatmapEnabled;
    map2.toggleMapHeatmap(heatmapEnabled);
  });
}
