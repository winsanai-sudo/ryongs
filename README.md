# 수학 손글씨 풀이 AI 세미나

완전 초보 선생님들에게 Codex 사용 과정을 드라마틱하게 보여주기 위한 정적 웹페이지입니다.

## 구성

- `index.html`: 세미나 시연 페이지
- `styles.css`: 디자인 스타일
- `script.js`: 단계 이동 및 프롬프트 복사 기능
- `render.yaml`: Render Static Site 배포 설정

## 시연 흐름

1. 완성본 10초 보기
2. 허술한 첫 요청
3. 입력 구조 추가
4. 문제/풀이/정답 구분
5. 손글씨 노트 디자인
6. 정답 가리기
7. 힌트 버튼
8. PNG 저장
9. 모바일 개선
10. GitHub 저장
11. Render 배포

## Render 배포

Render에서 이 GitHub 저장소를 연결하고 Static Site로 배포하면 됩니다.

- Build Command: 비워두기
- Publish Directory: `.`

`render.yaml`을 인식하면 위 설정이 자동으로 적용됩니다.
