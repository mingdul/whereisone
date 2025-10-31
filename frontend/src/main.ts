import { createApp } from 'vue'
import { createPinia } from 'pinia' // Pinia를 설치했을 경우

import App from './App.vue'
import router from './router'

// Tailwind CSS를 적용하기 위해 main.css 파일을 임포트합니다.
import './assets/main.css'

// Vue 앱 인스턴스 생성
const app = createApp(App)

// 플러그인 등록
app.use(createPinia()) // Pinia를 설치했을 경우
app.use(router)

// 앱을 public/index.html 파일의 #app 요소에 마운트
app.mount('#app')