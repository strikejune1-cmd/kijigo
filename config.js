// 키지GO 설정 파일
// 두 칸이 비어 있으면 '예시 데이터 모드'로 동작합니다 (포항시청·대전시청 예시).
// 키를 발급받은 뒤 아래 두 값을 채우고 다시 올리면 실제 데이터로 바뀝니다.
window.KIJIGO_CONFIG = {
  // Firebase Functions 주소. 배포 후 터미널에 나오는 주소 끝에 /api 까지 넣습니다.
  // 예: "https://asia-northeast3-kijigo-xxxx.cloudfunctions.net/api"
  apiBase: "",

  // 카카오 JavaScript 키 (지도 표시용). REST 키가 아닙니다.
  // 카카오 개발자 콘솔 > 앱 > 플랫폼 > Web에 GitHub Pages 주소를 등록해야 지도가 뜹니다.
  kakaoJsKey: "cf83bdfdb34ed5232bc82d2290739ec1",

  // 출발지 기본값 (회사)
  // 실시간 모드에서는 address로 정확한 위치를 자동으로 찾아 lat·lng를 바꿉니다.
  // lat·lng는 주소 검색이 실패했을 때만 쓰는 대략값입니다 (문정동 일대).
  origin: { name: "문정동 사무실", address: "서울 송파구 정의로7길 10", lat: 37.4855, lng: 127.1226 }
};
