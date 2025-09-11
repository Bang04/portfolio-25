
import solMain from "../assets/images/solariver/w_main.png";
export const careerProjects = [
  {
    title: "솔라리버 태양광 모니터링 Web & 솔라리버 QR Scanner App (Hybrid APP)",
    periods: {
      web: "2022.08 ~ 2023.01 (약 6개월)",
      app: "2022.12 ~ 2023.04 (약 5개월)"
    },
    image: solMain,
    role: "화면설계, 퍼블리싱, 화면 개발 (80%)",
    techStack: ["HTML", "CSS", "JavaScript", "Ajax", "jQuery", "PHP", "MySQL", "Android"],
    achievements: [
      "AmChart를 이용한 태양광 발전량 데이터 시각화",
      "발전량 데이터를 엑셀 파일 다운로드 및 프린트 기능 구현",
      "QR 스캐너 라이브러리를 이용한 모뎀 등록 및 관리 가능한 하이브리드 앱 개발",
      "Android App 배포 경험"
    ]
  },
  {
    title: "REMP 태양광 모니터링 Web & App(Hybrid App) 리뉴얼",
    periods: {
      web: "2022.01 ~ 2022.03 (약 3개월)",
      app: "2022.03 ~ 2022.06 (약 3개월)"
    },
    image: solMain,
    role: "기본 기능 버그 수정 및 인터페이스 기능 개선 (50%)",
    techStack: [
      "HTML", "CSS",  "JavaScript", "Ajax", "jQuery", "PHP","MySQL", "Android"
    ],
    achievements: [
      "태양광 패널 이상/발전량 데이터를 Firebase 클라우드 메시징 푸시 기능 개선",
      "로그인 시 저장되던 토큰을 새로운 인스턴스 API로 업데이트",
      "레거시 코드 리팩토링(login, webview)",
      "AmChart를 이용한 데이터 시각화"
    ]
  }
]

export default careerProjects;