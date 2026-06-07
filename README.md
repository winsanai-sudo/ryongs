# ryongs

수학 손글씨 풀이 AI 세미나용 빌드업 시연 페이지입니다.

## Pages

- `index.html`: 세미나 빌드업 시연 페이지
- `ryongs.html`: 기존 룡수학 스케줄 대시보드
- `styles.css`: 세미나 페이지 스타일
- `script.js`: 단계 이동 및 프롬프트 복사 기능
- `render.yaml`: Render Static Site 배포 설정

## Seminar Demo Flow

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

## Render

Render에서 이 GitHub 저장소를 연결하고 Static Site로 배포하면 됩니다.

- Build Command: 비워두기
- Publish Directory: `.`

`render.yaml`을 인식하면 위 설정이 자동으로 적용됩니다.
