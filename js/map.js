// 독도 좌표 @37.2429362,131.8668421

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapOption = { 
  center: new kakao.maps.LatLng(37.2429362, 131.8668421), // 지도의 중심좌표
  level: 3 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var iwContent = '<div id="info_w">대한민국 독도</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
iwPosition = new kakao.maps.LatLng(37.2429362, 131.8668421), //인포윈도우 표시 위치입니다
iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성하고 지도에 표시합니다
var infowindow = new kakao.maps.InfoWindow({
  map: map, // 인포윈도우가 표시될 지도
  position : iwPosition, 
  content : iwContent,
  removable : iwRemoveable
});

// 아래 코드는 인포윈도우를 지도에서 제거합니다
// infowindow.close();        