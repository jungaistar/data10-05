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
      },
      {
        "name": "관리 아이템 엑셀",
        "desc": "고객사 · 그룹 · 상세그룹 · 품목 · 품번 · 비고 · 공정을 한 줄에 공정 하나 모양으로 넣고 받습니다."
      },
      {
        "name": "기초재고",
        "desc": "기준날짜 아침의 아이템 × 공정 완료재고를 화면이나 엑셀 양식으로 한 번 넣습니다."
      }
    ],
    "steps": [
      "로그인 · 승인",
      "아이템 넣기",
      "기초재고",
      "실적 입력",
      "재고 · C/T 계산",
      "벗어난 날 찾기"
    ],
    "flow": [
      {
        "step": "로그인 · 승인",
        "desc": "메일로 가입 → 사용 신청 → 관리자 승인"
      },
      {
        "step": "아이템 넣기",
        "desc": "관리 아이템 엑셀(한 줄에 공정 하나)로 품번과 공정 순서를 넣음"
      },
      {
        "step": "기초재고",
        "desc": "기준날짜 아침의 공정별 완료재고를 한 번 적음"
      },
      {
        "step": "실적 입력",
        "desc": "휴대폰 타이머로 시작 · 멈춤 · 종료, 수량 → 실적 한 건"
      },
      {
        "step": "재고 · C/T 계산",
        "desc": "이 공정 실적은 더하고 앞 공정에서 빼서 완료재고, 순작업 시간 ÷ 수량"
      },
      {
        "step": "벗어난 날 찾기",
        "desc": "공정별 일별 생산수량 평균에서 ±30% 벗어난 날"
      }
    ],
    "goals": [
      "현장 휴대폰에서 타이머로 공정 실적을 바로 남깁니다.",
      "기초재고 + 공정 실적으로 아이템 · 공정별 지금 재고를 자동으로 계산하고, 계산 과정을 표로 보여 줍니다.",
      "순작업 시간으로 개당 C/T 를 내고, 평균에서 30% 이상 벗어난 날을 찾아 줍니다."
    ],
    "screen": "docs/img/screen.png",
    "plan": "plan.html",
    "home": true,
    "landing": {
      "company": {
        "name": "건화",
        "en": "KUNHWA"
      },
      "colors": {
        "navy": "#0d2a5c",
        "navy2": "#081d42",
        "brand": "#1a4fa0",
        "brandDark": "#123a78",
        "accent": "#ff9a8f"
      }
    }
  }
};
