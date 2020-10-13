import http from "./http";


//轮播图数据
export function SwipreList(params) {
  let obj = http.get("/home/banner", params);
  return obj;
}

//推荐的商品
export function topList(params) {
  let obj = http.post("/home/recommend", params);
  return obj;
}
