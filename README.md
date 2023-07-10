

## 1. 개발환경 설정

- 개발 툴 및 필요 프로그램 설치
- API 서버 프로젝트 클론

## 2. Vue CLI 프로젝트 생성

- Prettier
- ESLint
- jsconfig

## 3. 뷰 라우터 및 컴포넌트 설계

- `<router-link>`
- `<router-view>`
- `mode: history`와 서버 배포시 주의 사항
- 코드 스플리팅 `component: () => import('경로')`

## 4. 회원 가입 페이지 개발

- 사용자 폼 처리
- async & await
- axios
- swagger API 문서 보는 방법

## 5. 실무 환경 구성

- `axios.create()`
- env 파일 설정 방법
- Vue CLI 버전 3 이상에서의 env 파일 규칙

## 6. 로그인 페이지 개발

- 사용자 폼 처리 기능 구현
- async & await 에러 처리 방법
- 사용자 폼 유효성 검사

## 7. 로그인 상태 관리

- 뷰엑스를 이용한 사용자 아이디 관리
- `this.$router.push('/main')`

## 8. API 인증 처리를 위한 토큰 관리

- JSON Web Token
- `Authorization` 토큰 값으로 API 인증을 받는 방법
- `axios.interceptors`

## 9. 학습 노트 데이터 조회

- 학습 노트 목록 표시 기능 구현
- 목록 아이템 컴포넌트화
- 스피너를 이용한 데이터 로딩 상태 표시

## 10. 브라우저 저장소를 이용한 인증 값 관리

- 쿠키를 이용한 로그인 인증 값 저장
- actions를 이용한 컴포넌트 로직 정리

## 11. 학습 노트 데이터 생성
    
- 학습 노트 생성 기능 구현
- 학습 노트 본문 길이 유효성 검사


# Vue.js 학습 노트 애플리케이션

인프런 Vue.js Endgame 강의에서 다루는 애플리케이션 소스 코드입니다.

## 기술 스택

- Vue.js 2.6.10
- Vue Router
- Vuex
- Axios
- Vue Test Utils

## 개발 환경

- [Chrome](https://www.google.com/intl/ko/chrome/)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js LTS 버전(v10.x 이상)](https://nodejs.org/ko/)
- [Vue.js Dev Tools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

## VSCode 플러그인 목록

- 색 테마 : [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
- 파일 아이콘 테마 : [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- 뷰 확장 플러그인 : [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- 뷰 코드 스니펫 : [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
- 문법 검사 : ESLint, [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- 실습 환경 보조 : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- 기타
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager), [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag), [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens), [Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings), [Jetbrains IDE Keymap](https://marketplace.visualstudio.com/items?itemName=isudox.vscode-jetbrains-keybindings) 등


