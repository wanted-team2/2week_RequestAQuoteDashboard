# 에이팀벤처스

## 정보

- [배포주소 바로가기](https://quiet-ocean-28779.herokuapp.com/) 
- [팀 레포지토리](https://github.com/wanted-team2/2week_RequestAQuoteDashboard)

<br>

## 프로젝트 빌드 및 실행 방법

1. 패키지를 설치합니다.

```
$ yarn install or yarn
```

2. 서버를 실행합니다.

```
$ yarn start // json-graphql-server 실행
$ yarn start:dev // localhost 실행
```
<br>

## 기술 스택

- React.js, Redux-toolkit
- TypeScript
- styled-components
- GraphQL, Apollo Client


- exprss, json-graphql-server


- heroku


## 리팩토링 명세

### Header 컴포넌트

- 모바일 / 데스크탑 반응형 구현
- `resize`이벤트를 이용해 예외처리 구현
  - 너무 잦은 콜백 실행을 방지하기 위해 `useDebounce` 훅을 만들어서 사용

### 필터 옵션

- 객체 형태로 관리하던 필터 옵션 목록을 배열로 관리하기 위해 `makeCheckList` 함수 리팩토링

### redux-toolkit 도입

- `Home` 컴포넌트에서부터 타고 내려가며 props를 뿌려주는 구조때문에 가독성이 좋지 않아 유지/보수에 나쁜 코드로 판단하고 redux도입


### GraphQL, Apollo Client

- 우대 사항에 GraphQL, Apollo Client가 있어 공부해보며 적용해봤습니다.
  - graphql mock서버를 만들기 위해 `json-server` 대신 `json-graphql-server`를 사용하였습니다.
  - `json-server`를 사용한 코드는 팀으로 진행했던 [과제](https://github.com/wanted-team2/2week_RequestAQuoteDashboard) 에서 확인하실 수 있습니다.

### 배포

- Heroku를 이용하여 배포
- express로 서버를 만들어 React build 파일을 static하게 쏴주고 쿼리가 들어오면 `db.json`을 참조해서 보내주게끔 구현했습니다. 

<br>
<br>