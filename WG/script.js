(function () {
  var setting = {
    height: 635,
    width: 1280,
    zoom: 9,
    queryString: "Бишкек, Киргизия",
    place_id: "ChIJgcizkdy3njgRfeLefPW6Lkk",
    satellite: false,
    centerCoord: [42.87691905257302, 74.59186095740226],
    cid: "0x492ebaf57cdee27d",
    lang: "ru",
    cityUrl: "/kyrgyzstan/bishkek-10287",
    cityAnchorText: "Карта [CITY1], Киргизия",
    id: "map",
    embed_id: "484992",
  };
  var d = document;
  var s = d.createElement("script");
  s.src = "https://1map.com/js/script-for-user.js?embed_id=484992";
  s.async = true;
  s.onload = function (e) {
    window.OneMap.initMap(setting);
  };
  var to = d.getElementsByTagName("script")[0];
  to.parentNode.insertBefore(s, to);
})();
