# Data Model: 번개 모임 정산기

## Pinia Store: `useSettlementStore`

애플리케이션의 모든 상태는 `useSettlementStore`라는 단일 Pinia 스토어에서 관리됩니다.

### State

```typescript
interface Discount {
  participantName: string;
  amount: number;
}

interface Round {
  id: number; // Unique identifier for the round
  name: string; // Name of the round (e.g., "1차: 술주유")
  totalAmount: number; // Total amount spent in this round
  participants: string[]; // Array of participant names
  discounts: Discount[]; // Array of discounts for this round
}

interface SettlementState {
  rounds: Round[];
}
```

### Actions

-   `addRound(name: string, totalAmount: number)`: 새로운 차수를 추가합니다.
-   `removeRound(roundId: number)`: 특정 차수를 제거합니다.
-   `updateRound(roundId: number, data: Partial<Round>)`: 차수 정보를 업데이트합니다. (이름, 금액 등)
-   `addParticipant(roundId: number, participantName: string)`: 특정 차수에 참가자를 추가합니다.
-   `removeParticipant(roundId: number, participantName: string)`: 특정 차수에서 참가자를 제거합니다.
-   `applyDiscount(roundId: number, participantName: string, amount: number)`: 특정 차수의 특정 참가자에게 할인을 적용합니다.
-   `removeDiscount(roundId: number, participantName: string)`: 적용된 할인을 제거합니다.

### Getters

-   `calculateSettlement()`: `composables/useCalculator.ts`의 계산 로직을 호출하여 최종 정산 결과를 반환하는 getter를 포함할 수 있습니다. 또는 컴포넌트에서 직접 `useCalculator`를 호출할 수도 있습니다.
