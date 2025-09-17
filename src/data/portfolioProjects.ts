import enterweb from "../assets/images/project/Enterainment-web.png";
import enterApp from "../assets/images/project/Enterainment-app.png";
import cartWeb from "../assets/images/project/LlistWithCart-app.png";
import cartApp from "../assets/images/project/LlistWithCart-web.png";
import cartTablet from "../assets/images/project/LlistWithCart-tablet.png";
import crowdweb from "../assets/images/project/Crowdfunding-web.png";
import crowdapp from "../assets/images/project/Crowdfunding-app.png";
import sunnysweb from "../assets/images/project/Sunnyside-web.png";
import persnerapp from "../assets/images/project/PersonalFinance-app.png";
import persnerTablet from "../assets/images/project/PersonalFinance-tablet.png";
import persnerweb from "../assets/images/project/PersonalFinance-web.png";

const projects = [
  {
    name: "PersonalFinance App",
    period: "2025-01-23 ~ 2025-02-10",
    description: "이 앱은 5페이지(개요, 거래 내역, 예산, 팟, 정기 청구서)로 구성된 개인 금융 관리 앱",
    images: {
      web: persnerweb,
      mobile: persnerapp,
      tablet: persnerTablet,
    },
    roles: [
      "저축 통장(Pots) 예산 및 저장 포트 CRUD 기능",
      "정기 청구서(Recurring Bills) 상태 확인",
      "정기 청구서(Recurring Bills) 검색 및 정렬",
      "반응형 UI 설계 및 개발",
    ],
    skills: ["HTML", "CSS", "JavaScript","React"],
  },
  {
    name: "Product list with cart",
    period: "2025-02-27 ~ 2025-03-12",
    description: "장바구니가 포함된 온라인 제품 목록 애플리케이션입니다.",
    images: {
      web: cartApp,
      mobile: cartWeb,
      tablet: cartTablet,
    },
    roles: [
      "장바구니에 항목 추가/제거",
      "수량 증가 및 감소 기능",
      "주문 확인 모달 구현",
      "새로운 주문 초기화 기능",
      "키보드 전용 내비게이션 지원",
      "반응형 UI 및 접근성 구현",
    ],
    skills: ["HTML", "CSS", "JavaScript","React"],
  },
  {
    name: "Entertainment Web App",
    period: "2025-01-23 ~ 2025-02-10",
    description: "영화, TV 시리즈 탐색 및 북마크 기능을 제공하는 엔터테인먼트 웹 앱",
    images: {
      web: enterweb,
      mobile: enterApp,
    },
    roles: [
      "홈, 영화, TV 시리즈, 북마크 페이지 구현",
      "북마크 추가 및 제거",
      "전역 검색 기능 구현",
      "반응형 레이아웃 설계",
    ],
    skills: ["HTML", "CSS", "JavaScript","React"],
  },
  {
    name: "Crowdfunding Product Page",
    period: "2025-02-10 ~ 2025-02-19",
    description: "크라우드 펀딩 제품 페이지로, 사용자가 후원(pledge)을 선택하고 진행 상황을 실시간으로 확인할 수 있는 웹 앱",
    images: {
      web: crowdweb,
      mobile: crowdapp,
    },
    roles: [
      "후원 플랜 선택 및 확인 기능",
      "후원 시 진행바(progress bar) 및 총 모금액 실시간 업데이트",
      "총 후원자(backers) 수 증가 기능",
      "북마크 토글 기능 구현",
      "반응형 UI 설계 (디바이스별 최적화)",
      "인터랙티브 요소 hover/focus 상태 구현",
    ],
    skills: ["HTML", "CSS", "JavaScript","React"],
  },
  {
    name: "Agency Landing Page",
    period: "2025-06-17 ~ 2025-06-23",
    description: "대행사 랜딩 페이지 웹사이트 프로젝트입니다.",
    images: {
      web: sunnysweb,
    },
    roles: [
      "랜딩 페이지 UI/UX 디자인",
      "반응형 웹 구현",
      "레이아웃 최적화 및 접근성 개선",
    ],
    skills: ["HTML", "CSS", "JavaScript","React"],
  },
];

export default projects;
