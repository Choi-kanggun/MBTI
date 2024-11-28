mbti-orcin.vercel.app
# 🎧 welcome to Replay 🎧

### 오늘의 노래를 추천해주는 뉴스피드 프로젝트 
링크: news-feed-brown.vercel.app

![Macbook Pro - Dark Background](![image](https://github.com/user-attachments/assets/372abf9a-b654-4c9c-bdca-cbca3c10fad0))

<br/>

# 🕹️ 프로젝트 기능
### 1️⃣ 외부 서버와 json-server를 활용한 CRUD
- 외부 서버에서 제공하는 api를 이용하여 회원가입, 로그인, 로그아웃, 프로필 변경 구현
- json-server 통해 MBTI 테스트 결과 데이터 관리
  
### 2️⃣ 예외처리와 토큰 만료
- 외부 서버에서 제공하는 api에 query string으로 토큰 만료 시간 설정
- 로그인, 회원 가입 예외 처리
  
### 3️⃣ zustand를 활용한 전역상태 관리
- `useAuthStore.jsx`에서 zustand를 이용하여 유저 정보 관리 및 localStorage 관리

### 4️⃣ React Router DOM을 활용한 페이지 라우팅
- privateRoute를 활용하여 로그인 된 유저가 접근할 수 있는 페이지와 아닌 페이지 구분
  
### 5️⃣ MBTI 결과 공개여부 및 삭제 버튼
- 테스트 결과 userId와 로그인한 userId가 같으면 버튼이 보이고 다르면 버튼이 보이지 않음
- json-server에 patch api를 tanstack query를 활용하여 공개, 비공개 토글, 삭제 구현 및 invalidateQueries로 무효화와 refetch 구현

### 6️⃣ 프로필 변경
- 로그인한 유저의 닉네임 변경 구현

<br/>

# 🎥 시연 영상
<details>
<summary>1. 회원가입, 로그인</summary>
<div markdown="1">

https://github.com/user-attachments/assets/cc378108-1e11-454e-b5db-6dfcf77a7ff9

</div>
</details>
<details>
<summary>2. MBTI 테스트 및 결과</summary>
<div markdown="1">
  
https://github.com/user-attachments/assets/6553e8d8-80c4-442a-b84f-2ff60b928a1a

</div>
</details>
<details>
<summary>3. MBTI 결과 공개, 비공개, 삭제</summary>
<div markdown="1">

https://github.com/user-attachments/assets/0498b9fe-37b0-40eb-917a-b9baa00457fe

https://github.com/user-attachments/assets/60b33637-3c75-49c0-bba1-bfbef93459ce


</div>
</details>
<details>
<summary>4. 닉네임 수정</summary>
<div markdown="1">

https://github.com/user-attachments/assets/ec9b4898-3a79-422a-92a9-8c43c6e2a803

</div>
</details>
<details>
<summary>5. 토큰 만료</summary>
<div markdown="1">

https://github.com/user-attachments/assets/c30ff24f-a152-4e23-a7a4-8e645b020853

</div>
</details>
<details>
<summary>6. 로그아웃</summary>
<div markdown="1">

https://github.com/user-attachments/assets/260b8731-fc27-444f-bf4c-4251b96d80e4

</div>
</details>

<br />

# ⚙️ Development Environment
`upabase/supabase-js: ^2.46.1` `react-router-dom: ^6.28.0` `styled-components: ^6.1.13` `styled-reset: ^4.5.2` `vite: ^5.4.10`

<br/>

# 🖥️ Technologies & Tools (FE) 🖥️
<div>
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=Javascript&logoColor=white" />
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />

<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/>
</div>

<br/>

# 🌳 프로젝트 구조
<img width="166" alt="스크린샷 2024-11-21 오전 11 31 45" src="https://github.com/user-attachments/assets/40302776-ddea-428d-835c-3a09e512a989">

