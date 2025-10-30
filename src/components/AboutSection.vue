<template>
  <div class="about-section">
    <h2 class="about-title">사용법</h2>
    <div class="about-content">
      <p>이 N빵요정은 모임의 총무가 여러 장소에 걸친 비용을 쉽게 정산하고 공유할 수 있도록 돕습니다.</p>
      <h3>주요 기능:</h3>
      <ul>
        <li><strong>장소 추가</strong>: "새로운 장소 추가" 섹션에서 장소 이름과 총 금액을 입력하고 "추가" 버튼을 눌러 새로운 장소를 추가합니다.</li>
        <li><strong>장소 관리</strong>:
          <ul>
            <li>장소 이름을 클릭하여 수정할 수 있습니다.</li>
            <li>총 금액을 클릭하여 수정할 수 있습니다.</li>
            <li>"X" 버튼을 눌러 장소를 삭제할 수 있습니다.</li>
          </ul>
        </li>
        <li><strong>참가자 관리</strong>:
          <ul>
            <li>각 장소 아래의 "참가자 추가" 입력란에 이름을 입력하고 "추가" 버튼을 눌러 참가자를 추가합니다.</li>
            <li>참가자 이름 옆의 "x" 버튼을 눌러 해당 장소에서 참가자를 제외할 수 있습니다.</li>
          </ul>
        </li>
        <li><strong>할인 적용</strong>:
          <ul>
            <li>참가자 이름 옆의 "(할인)" 버튼을 눌러 특정 참가자에게 할인 금액을 적용할 수 있습니다.</li>
            <li>할인 금액을 입력하고 "적용" 버튼을 누르면 해당 장소의 나머지 참가자들이 할인 금액을 분담합니다.</li>
          </ul>
        </li>
        <li><strong>최종 정산</strong>: 모든 장소, 참가자, 할인 정보 입력 후, "정산 결과" 섹션에서 각 인원이 내야 할 총 금액을 확인할 수 있습니다.</li>
        <li><strong>결과 복사</strong>: "클립보드에 복사" 버튼을 눌러 정산 결과를 텍스트로 복사할 수 있습니다.</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about-section {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.about-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
}

.about-content p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #555;
}

.about-content h3 {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-top: 1.25rem;
  margin-bottom: 0.75rem;
}

.about-content ul {
  list-style-type: disc;
  margin-left: 1.25rem;
  margin-bottom: 1rem;
}

.about-content ul ul {
  list-style-type: circle;
  margin-left: 1.25rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.about-content li {
  margin-bottom: 0.5rem;
  color: #555;
}

.about-content strong {
  color: #333;
}

@media (max-width: 600px) {
  .about-section {
    padding: 1rem;
  }

  .about-title {
    font-size: 1.25rem;
  }

  .about-content h3 {
    font-size: 1.1rem;
  }

  .about-content p,
  .about-content li {
    font-size: 0.9rem;
  }
}
</style>