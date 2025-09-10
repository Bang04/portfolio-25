// src/data/projects.js
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
    period: "2022-08-01 ~ 2023-04-01",
    description: "이 앱은 5페이지(개요, 거래 내역, 예산, 팟, 정기 청구서)로 구성",
    images: {
      web: persnerweb,
      mobile: persnerapp,
      tablet: persnerTablet,
    },
    roles: [
      "* 거래 검색, 정렬 및 필터링",
      "* 예산 및 저장 포트를 생성, 읽기, 업데이트, 삭제(CRUD)합니다.",
      "* 현재 월의 정기 청구서와 각 청구서의 상태를 확인하세요.",
      "Android App 배포 경험",
    ],
    skills: [
      "HTML",
      "CSS3",
      "JavaScript",
      "Ajax",
      "jQuery",
      "PHP",
      "Tailwind",
      "TypeScript",
      "React",
    ],
  },
  {
    name: "Enter Web",
    period: "2022-08-01 ~ 2023-04-01",
    description: "태양광 모듈의 각 QR코드를 스캔해서 등록하여 유지관리하는 App",
    images: {
      web: enterweb,
      mobile: enterApp,
    },
    roles: [
      "web, app 기획, 설계, 개발, 빌드, 배포 경험",
      "1. AmChart를 이용한 데이터 시각화",
      "2. QR 스캐너 라이브러리를 이용한 하이브리드 앱 개발",
      "3. Android App 배포 경험",
    ],
    skills: [
      "HTML",
      "CSS3",
      "JavaScript",
      "Ajax",
      "jQuery",
      "PHP",
      "Tailwind",
      "TypeScript",
      "React",
    ],
  },
  {
    name: "Cart App",
    period: "2021-05-01 ~ 2021-12-01",
    description: "온라인 쇼핑몰 장바구니 앱 개발 및 웹사이트 연동 프로젝트",
    images: {
      web: cartApp,
      mobile: cartWeb,
      tablet: cartTablet,
    },
    roles: [
      "UI/UX 설계 및 프로토타입 제작",
      "장바구니 CRUD 기능 개발",
      "React 상태 관리 및 Redux 적용",
      "결제 모듈 연동 경험",
    ],
    skills: [
      "HTML",
      "CSS3",
      "JavaScript",
      "React",
      "Redux",
      "Tailwind",
      "TypeScript",
    ],
  },
  {
    name: "Crowd Web",
    period: "2020-09-01 ~ 2021-03-01",
    description: "크라우드 펀딩 웹사이트 개발 프로젝트",
    images: {
      web: crowdweb,
      mobile: crowdapp,
    },
    roles: [
      "웹사이트 프론트엔드 설계 및 개발",
      "결제 및 펀딩 관리 기능 구현",
      "반응형 디자인 적용",
      "프로젝트 배포 및 유지보수",
    ],
    skills: [
      "HTML",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind",
      "TypeScript",
    ],
  },
  {
    name: "Sunnys Web",
    period: "2021-01-01 ~ 2021-06-01",
    description: "커피 브랜드 웹사이트 리뉴얼 프로젝트",
    images: {
      web: sunnysweb,
    },
    roles: [
      "웹사이트 디자인 리뉴얼 및 퍼블리싱",
      "SEO 최적화 및 웹 접근성 개선",
      "반응형 웹 구현",
    ],
    skills: ["HTML", "CSS3", "JavaScript", "Tailwind", "React"],
  },
];

export default projects;