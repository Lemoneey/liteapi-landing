import { LiteAPI } from "liteapi-map-sdk";
import "../node_modules/liteapi-map-sdk/dist/liteapi-map-sdk.css";

LiteAPI.Map.init({
  placeId: "ChIJYeZuBI9YwokRjMDs_IEyCwo",
  proxyDomain: "lite-api-proxy.vercel.app",
  selector: "#app",
});

LiteAPI.Map.init({
  placeId: "ChIJW-T2Wt7Gt4kRKl2I1CJFUsI",
  proxyDomain: "lite-api-proxy.vercel.app",
  selector: "#app2",
});
