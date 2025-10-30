# Tasks: 번개 모임 정산기

**Input**: Design documents from `/specs/1-dutch-pay-calculator/`
**Prerequisites**: plan.md, spec.md, data-model.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Install project dependencies with `npm install`
- [x] T002 [P] Install testing and styling libraries with `npm install -D vitest @vue/test-utils tailwindcss postcss autoprefixer`
- [x] T003 [P] Initialize Tailwind CSS with `npx tailwindcss init -p`
- [x] T004 Configure `tailwind.config.js` to scan `.vue` and `.ts` files

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T005 Create Pinia store in `src/stores/useSettlementStore.ts` with initial state and actions from data-model.md
- [x] T006 Create calculator composable in `src/composables/useCalculator.ts` with placeholder calculation logic
- [x] T007 [P] Write basic unit test for store actions in `tests/unit/stores/useSettlementStore.spec.ts`
- [x] T008 [P] Write basic unit test for calculator logic in `tests/unit/composables/useCalculator.spec.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - 차수 관리 (Priority: P1) 🎯 MVP

**Goal**: 총무는 각 차수의 이름과 총 결제 금액을 입력, 수정, 삭제할 수 있다.
**Independent Test**: 차수를 추가하고, 금액을 입력한 뒤, 정보가 올바르게 표시되는지 확인한다.

### Tests for User Story 1

- [x] T009 [P] [US1] Write unit test for `RoundCard.vue` component in `tests/unit/components/RoundCard.spec.ts`

### Implementation for User Story 1

- [x] T010 [P] [US1] Create `RoundInputForm.vue` component in `src/components/RoundInputForm.vue`
- [x] T011 [P] [US1] Create `RoundCard.vue` component in `src/components/RoundCard.vue`
- [x] T012 [US1] Implement `addRound` and `removeRound` actions in `src/stores/useSettlementStore.ts`
- [x] T013 [US1] Integrate `RoundInputForm.vue` and `RoundCard.vue` into `src/App.vue` to display and manage rounds

**Checkpoint**: User can add and remove settlement rounds.

---

## Phase 4: User Story 2 - 참가자 관리 (Priority: P1)

**Goal**: 총무는 각 차수별로 참여한 인원을 추가하거나 제외할 수 있다.
**Independent Test**: 특정 차수에 참가자를 추가하고, 다른 차수에서는 제외한 뒤, 각 차수의 참가자 명단이 올바르게 표시되는지 확인한다.

### Tests for User Story 2

- [x] T014 [P] [US2] Write unit test for `ParticipantTag.vue` in `tests/unit/components/ParticipantTag.spec.ts`

### Implementation for User Story 2

- [x] T015 [P] [US2] Create `ParticipantTag.vue` component in `src/components/ParticipantTag.vue`
- [x] T016 [US2] Implement `addParticipant` and `removeParticipant` actions in `src/stores/useSettlementStore.ts`
- [x] T017 [US2] Update `src/components/RoundCard.vue` to use `ParticipantTag.vue` and manage participants for a round

**Checkpoint**: User can add and remove participants from each round independently.

---

## Phase 5: User Story 3 - 할인 적용 (Priority: P2)

**Goal**: 총무는 특정 차수에서 특정 인원에게 고정 할인 금액을 적용할 수 있다.
**Independent Test**: 특정 차수의 특정 참가자에게 할인 금액을 적용하고, 최종 정산 시 해당 할인이 올바르게 반영되었는지 확인한다.

### Tests for User Story 3

- [x] T018 [P] [US3] Write unit test for `DiscountModal.vue` in `tests/unit/components/DiscountModal.spec.ts`

### Implementation for User Story 3

- [x] T019 [P] [US3] Create `DiscountModal.vue` component in `src/components/DiscountModal.vue`
- [x] T020 [US3] Implement `applyDiscount` action in `src/stores/useSettlementStore.ts`
- [x] T021 [US3] Update `src/composables/useCalculator.ts` to correctly factor in discounts.
- [x] T022 [US3] Update `src/components/RoundCard.vue` to trigger `DiscountModal.vue` and display applied discounts.

**Checkpoint**: User can apply a discount to a participant in a specific round.

---

## Phase 6: User Story 4 - 최종 정산 및 결과 공유 (Priority: P1)

**Goal**: 총무는 '최종 정산' 버튼을 눌러 각 인원이 내야 할 총 금액을 확인하고, 결과를 텍스트로 복사할 수 있다.
**Independent Test**: 모든 정보를 입력한 후 '최종 정산' 버튼을 누르고, 표시된 결과가 예상과 일치하는지 확인한 뒤, '텍스트 복사하기' 버튼으로 클립보드에 복사되는지 확인한다.

### Tests for User Story 4

- [x] T023 [P] [US4] Write unit test for `SummaryDisplay.vue` in `tests/unit/components/SummaryDisplay.spec.ts`

### Implementation for User Story 4

- [x] T024 [P] [US4] Create `SummaryDisplay.vue` component in `src/components/SummaryDisplay.vue`
- [x] T025 [US4] Implement the final calculation logic in `src/composables/useCalculator.ts` based on all rounds, participants, and discounts.
- [x] T026 [US4] Implement clipboard copy functionality in `src/components/SummaryDisplay.vue`.
- [x] T027 [US4] Integrate `SummaryDisplay.vue` into `src/App.vue` and trigger calculation.

**Checkpoint**: User can see the final settlement result and copy it to the clipboard.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T028 [P] Code cleanup and refactoring across all new components.
- [x] T029 [P] Review and enhance overall styling and responsiveness for a polished UI.
- [x] T030 [P] Update `README.md` with final usage instructions and a screenshot.
