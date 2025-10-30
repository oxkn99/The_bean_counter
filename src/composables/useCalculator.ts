import { computed, type Ref } from 'vue'
import type { Round } from '../stores/useSettlementStore'

export function useCalculator(rounds: Ref<Round[]>) {
  const settlementResult = computed(() => {
    const participantTotals: { [key: string]: number } = {}

    const allParticipants = new Set<string>()
    rounds.value.forEach(round => {
      round.participants.forEach(p => allParticipants.add(p))
    });

    allParticipants.forEach(p => {
      participantTotals[p] = 0
    });

    let resultText = ''

    rounds.value.forEach(round => {
      if (round.participants.length === 0 || round.totalAmount === 0) return

      const baseCostPerPerson = round.totalAmount / round.participants.length;
      let totalDiscountInRound = 0;
      round.discounts.forEach(d => totalDiscountInRound += d.amount);

      const participantsWithDiscount = new Set(round.discounts.map(d => d.participantName));
      const participantsWithoutDiscount = round.participants.filter(p => !participantsWithDiscount.has(p));

      const shareOfDiscount = participantsWithoutDiscount.length > 0 ? totalDiscountInRound / participantsWithoutDiscount.length : 0;

      resultText += `${round.name}: ${round.totalAmount.toLocaleString()}원 / ${round.participants.length}명 (${round.participants.join(', ')})\n`;

      round.participants.forEach(participant => {
        const discount = round.discounts.find(d => d.participantName === participant);
        if (discount) {
          participantTotals[participant] += Math.max(0, baseCostPerPerson - discount.amount);
        } else {
          participantTotals[participant] += baseCostPerPerson + shareOfDiscount;
        }
      });
    });

    resultText += '\n--- 최종 정산 ---\n'
    Object.entries(participantTotals).forEach(([name, total]) => {
      if (total >= 0) { // Show participants even if their total is 0
        resultText += `${name}: ${Math.floor(total).toLocaleString()}원\n`
      }
    });

    return resultText.trim()
  });

  return {
    settlementResult,
  }
}