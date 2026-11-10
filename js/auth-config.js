// 로그인 설정 — 이 파일 한 곳만 바꾸면 된다(생성: data10-00/scripts/apply-auth-kit.mjs, 대문 문구 출처 docs/plan.json).
// 내 Supabase 로 옮길 때: url · anonKey 를 내 프로젝트 값으로, 카카오를 설정하지 않았으면 kakao: false. 안내 = docs/내_깃허브로_옮기기.md
// prefix 는 supabase/auth.sql 의 표 이름 앞부분과 같아야 한다.
window.AUTH_CONFIG = {
  "url": "https://hcmgdztsgjvzcyxyayaj.supabase.co",
  "anonKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbWdkenRzZ2p2emN5eHlheWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MzU4ODcsImV4cCI6MjA4NzAxMTg4N30.gznaPzY1l8qDAPsEyYNR9KS7f7VqS3xaw-_2HTSwSZw",
  "prefix": "data1005",
  "kakao": true,
  "idleMinutes": 30,
  "localBypass": true,
  "site": {
    "title": "공정 재고 · C/T",
    "summary": "기초재고를 한 번 적고 현장에서 공정 실적(시작 · 멈춤 · 다시 시작 · 종료)을 넣으면 아이템 · 공정별 지금 재고, 실제 걸린 시간(C/T), 공정별 일별 생산수량을 보여 주는 도구입니다.",
    "course": "현장 데이터 디지털화 전문가과정 · 2차수",
    "features": [
      {
        "name": "타이머 실적 입력",
        "desc": "아이템 · 공정을 골라 시작 · 멈춤 · 다시 시작 · 종료, 종료 때 수량을 적으면 실적 한 건이 됩니다."
      },
      {
        "name": "공정별 재고현황",
        "desc": "기초재고와 실적으로 아이템 · 공정별 완료재고를 계산하고, 「계산 보기」로 더하고 뺀 과정을 보여 줍니다."
      },
      {
        "name": "실제 걸린 시간(C/T)",
        "desc": "멈춘 시간을 뺀 순작업 시간 ÷ 수량으로 개당 C/T 를 내고 공정 평균보다 30% 긴 것을 표시합니다."
      },
      {
        "name": "일별 생산수량 분석",
        "desc": "공정별 일별 생산수량과 평균, 평균에서 30% 이상 벗어난 날과 그날의 실적을 보여 줍니다."
      }
    ],
    "steps": [
      "로그인 · 승인",
      "아이템 넣기",
      "기초재고",
      "실적 입력",
      "재고 · C/T 계산",
      "벗어난 날 찾기"
    ]
  }
};
