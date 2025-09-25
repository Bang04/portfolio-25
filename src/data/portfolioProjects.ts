import enterWeb from "../assets/images/project/Enterainment-web.png";
import enterApp from "../assets/images/project/Enterainment-app.png";
import cartWeb from "../assets/images/project/LlistWithCart-app.png";
import cartApp from "../assets/images/project/LlistWithCart-web.png";
import cartTablet from "../assets/images/project/LlistWithCart-tablet.png";
import crowdWeb from "../assets/images/project/Crowdfunding-web.png";
import crowdApp from "../assets/images/project/Crowdfunding-app.png";
import sunnysWeb from "../assets/images/project/Sunnyside-web.png";
// import persnerApp from "../assets/images/project/PersonalFinance-app.png";
// import persnerTablet from "../assets/images/project/PersonalFinance-tablet.png";
import persnerWeb from "../assets/images/project/PersonalFinance-web.png";

import potWeb from "../assets/images/project/personal/pot-web.png";
import potTablet from "../assets/images/project/personal/pot-web.png";
import add from "../assets/images/project/personal/pot-add.png";
import del from "../assets/images/project/personal/pot-del.png";
import edit from "../assets/images/project/personal/pot-edit.png";

import RecurringWeb from "../assets/images/project/personal/recurring-web.png";
import RecurringTablet from "../assets/images/project/personal/recurring-tablet.png";
import RecurringApp from "../assets/images/project/personal/recurring-app.png";

const projects = [
  {
    name: "PersonalFinance App",
    type: "team",
    period: "2025-01-23 ~ 2025-02-10",
    description: "거래 내역, 예산 관리, 정기 청구서로 구성된 개인 금융 관리 웹 앱",
    images: {
      web: potWeb,
      tablet: RecurringTablet,
      mobile: RecurringApp,
    },
    detailImages : [ persnerWeb, potWeb, potTablet,add, edit, del, RecurringWeb ,RecurringTablet, RecurringApp],
    functions : ["저축 통장 예산 생성,조회,수정,삭제" , "정기 청구서 리스트, 검색 및 정렬 기능"] , 
    roles: [
      "Redux 액션 기반으로 Pot의 CRUD(생성, 수정 등) 기능을 구현, 팀 리팩토링 이후 Firebase 연동 및 공통 모듈로 통합",
      "Custom React Hook을 활용해 수정/삭제 버튼이 포함된 Toast 알림 기능 구현",
      "Intersection Observer API 활용해 정기 청구서 리스트 무한스크롤 기능 추가",
      "공통 모듈 기반으로 정기 청구서 검색 및 정렬 연동 및 구현",
      "각 페이지 디바이스 별 반응형 UI 구현",
    ],
    skills: ["HTML", "CSS", "JavaScript","React","Redux","Tailwind"],
    links: { 
      demo: "https://toy-personal-finance.web.app/",   // 배포 사이트
      github: "https://github.com/Bang04/frontend-mentor-challenges/tree/b6b7812cf3b339931a81d192c73b989b73ff100a/personal-finance-app"
    }
  },
  {
    name: "Product list with cart",
    type: "personal",
    period: "2025-02-27 ~ 2025-03-12",
    description: "장바구니가 포함된 온라인 제품 목록 웹 앱",
    images: {
      web: cartWeb,
      tablet: cartTablet,
      mobile: cartApp,
    },
    functions : ["장바구니에 항목 추가/제거", "상품 수량 증가 및 감소 기능","주문 확인 모달 구현"],
    roles: [
      "장바구니 버튼 클릭 시 Redux/State 액션을 활용해 항목 추가,삭제 구현",
      "장바구니 수량 변경시  Redux/State 기반으로 실시간 UI 반영",
      "반응형 UI 구현",
    ],
    skills: ["HTML", "CSS", "JavaScript","React","Redux","TypeScript","Bulma"],
    links: { 
      demo: null,   // 배포 사이트
      github: "https://github.com/Bang04/frontend-mentor-solo/tree/a8f24fc04ac8e7788a8ec5fb985f1f430d8d54ac/product-list-with-cart-main"
    }
  },
  {
    name: "Entertainment Web App",
    type: "team",
    period: "2025-01-23 ~ 2025-02-10",
    description: "영화, TV 시리즈 탐색 및 북마크 기능을 제공하는 엔터테인먼트 웹 앱",
    images: {
      web: enterWeb,
      mobile: enterApp,
    },
    functions : ["홈, 영화, TV 시리즈 메인 화면 반응형 설계",  "북마크 추가 및 제거"],
    roles: [
      "라이브러리 없이 State와 Ref를 활용해 슬라이드 기능 구현",
      "Redux 상태관리로 북마크 리스트를 관리하고 dispatch 액션을 통해 추가 및 삭제 기능 구현",
      "메인 화면 반응형 레이아웃 구현",
    ],
    skills: ["HTML", "CSS", "JavaScript","React","React","TypeScript"],
    links: { 
      demo: null,   // 배포 사이트
      github: "https://github.com/Bang04/frontend-mentor-challenges/tree/b6b7812cf3b339931a81d192c73b989b73ff100a/entertainment-webapp"
    }
  },
  {
    name: "Crowdfunding Product Page",
     type: "team",
    period: "2025-02-10 ~ 2025-02-19",
    description: "크라우드 펀딩 제품 페이지로, 사용자가 후원(pledge)을 선택하고 진행 상황을 실시간으로 확인할 수 있는 웹 앱",
    images: {
      web: crowdWeb,
      mobile: crowdApp,
    },
    functions : ["후원 플랜 선택 및 확인 기능","후원 시 진행률·모금액·후원자 수 실시간 반영", "북마크 토글 기능 구현",],
    roles: [
      "Redux 상태 관리하여 후원 시 진행률·모금액·후원자 수 실시간 반영 구현",
      "dispatch 액션 북마크 토글 기능 구현",
      "모바일 뷰에서 햄버거 메뉴 버튼 클릭시 토글(열림/닫힘) 기능 구현",
      "디바이스별 반응형 최적화",
    ],
    skills: ["HTML", "CSS", "JavaScript","React","React","Bulma"],
    links: { 
      demo: null,   // 배포 사이트
      github: "https://github.com/Bang04/frontend-mentor-challenges/tree/b6b7812cf3b339931a81d192c73b989b73ff100a/crowdfunding-product-page"
    }
  },
  {
    name: "Agency Landing Page",
     type: "personal",
    period: "2025-06-17 ~ 2025-06-23",
    description: "대행사 랜딩 반응형 웹 페이지.",
    images: {
      web: sunnysWeb,
    },
    functions : [ "랜딩 페이지 UI/UX 디자인","반응형 웹 구현",],
    roles: [
      "랜딩 페이지 UI/UX 퍼블리싱 및 반응형 웹 구현",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React","Tailwind"],
    links: { 
      demo: null,   // 배포 사이트
      github: "https://github.com/Bang04/frontend-mentor-solo/tree/a8f24fc04ac8e7788a8ec5fb985f1f430d8d54ac/sunnyside-agency-landing-page"
    }
  },
];

export default projects;
