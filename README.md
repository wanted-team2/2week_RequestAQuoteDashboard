# 목표는 취업이조

## 🚀 정보

- [배포주소 바로가기](https://requestaquotedashboard.herokuapp.com)
- [노션 바로가기](https://sleepy-oxygen-343.notion.site/41970b5fee2d45aebd7b01de061039eb)

<br>


## 👀 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/wanted-team2/2week_RequestAQuoteDashboard.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn start // json-server 실행
$ yarn start:dev // localhost 싫행
```
<br>

## 😎 팀원

- [김지영(팀장)](https://github.com/Jeong-jeong)
  - [회고](https://velog.io/@jeongs/프리온보딩-3번째-과제-회고-2주차-f36olf08) 
- [고병표](https://github.com/kokoball)
- [유제호](https://github.com/ludacirs)
- [홍수연](https://github.com/suyeon-hong)

<br>

## 🔥 프로젝트 과정 소개
| [코딩 컨벤션 규칙](https://sleepy-oxygen-343.notion.site/9c06caa291f44d129f3b707fd4627aa0) | [깃허브 작성 규칙](https://sleepy-oxygen-343.notion.site/9c06caa291f44d129f3b707fd4627aa0) |
|--|--|
|![1](https://user-images.githubusercontent.com/78653426/152985098-26a0af22-9186-4d1b-b302-ef5246f85b29.png)|![3](https://user-images.githubusercontent.com/78653426/152985107-45acb775-a967-4e8d-a0d9-271171369fed.png)|
|![2](https://user-images.githubusercontent.com/78653426/152985104-7c2ac57a-1491-4d2f-90cf-3d1ae24c6799.png)|![4](https://user-images.githubusercontent.com/78653426/152985109-90d48190-b379-481d-aa1f-66ed1f86e581.png)|


<br>

### 📝 기능 목록 명세
- base, domain 컴포넌트 각자 작업 진행
- 이후부터 팀원이 모두 모여 실시간 페어프로그래밍 진행
#### ✔ 김지영
- 프로젝트 기초 세팅
- Heroku 배포
- `Dropdown`, `Dropdowns` 컴포넌트 구현

#### ✔ 고병표
 - `Card` 컴포넌트 구현
    - hover시 보더 스타일 적용
    - status 가 '상담중'일시 상단 버튼표기 

#### ✔ 유제호
- `Header`, 반응형 구현
- 체크리스트 상태값에 따라 카드 필터링 로직 구현

#### ✔ 홍수연
- `Buttons`, `Toggle` 컴포넌트 구현
- 모바일 UI 적용

<br>
<br>

### 💿 필터링 조합

#### 가공방식, 재료 내에서 여러 개 선택 시
옵션을 **포함하고 있으면** 노출

#### 가공방식 + 재료가 여러 개 선택 시
가공방식과 재료 **옵션을 포함하고 있으면** 노출


<br>

## 📈 디렉토리 구조
```
.
├── README.md
├── build
│   ├── asset-manifest.json
│   ├── index.html
│   ├── robots.txt
│   └── static
├── config-overrides.js
├── package.json
├── public
│   ├── index.html
│   └── robots.txt
├── server
│   ├── db.json
│   └── index.js
├── src
│   ├── App.tsx
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── index.tsx
│   ├── models
│   ├── pages
│   ├── react-app-env.d.ts
│   ├── setupTests.ts
│   ├── styles
│   └── utils
├── tsconfig.json
├── tsconfig.paths.json
└── yarn.lock
```
