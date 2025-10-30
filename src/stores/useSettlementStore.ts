import { defineStore } from 'pinia'

export interface Discount {
  participantName: string;
  amount: number;
}

export interface Round {
  id: number; // Unique identifier for the round
  name: string; // Name of the round (e.g., "1차: 술주유")
  totalAmount: number; // Total amount spent in this round
  participants: string[]; // Array of participant names
  discounts: Discount[]; // Array of discounts for this round
}

export interface SettlementState {
  rounds: Round[];
}

export const useSettlementStore = defineStore('settlement', {
  state: (): SettlementState => ({
    rounds: [],
  }),
  getters: {
    allUniqueParticipants(state): string[] {
      const participants = new Set<string>();
      state.rounds.forEach(round => {
        round.participants.forEach(p => participants.add(p));
      });
      return Array.from(participants);
    }
  },
  actions: {
    addRound(name: string, totalAmount: number) {
      const newRound: Round = {
        id: Date.now(),
        name,
        totalAmount,
        participants: [],
        discounts: [],
      };
      this.rounds.push(newRound);
    },
    removeRound(roundId: number) {
      this.rounds = this.rounds.filter((round) => round.id !== roundId);
    },
    updateRound(roundId: number, data: Partial<Omit<Round, 'id'>>) {
      const round = this.rounds.find((r) => r.id === roundId);
      if (round) {
        Object.assign(round, data);
      }
    },
    addParticipant(roundId: number, participantName: string) {
      const round = this.rounds.find((r) => r.id === roundId);
      if (round && !round.participants.includes(participantName)) {
        round.participants.push(participantName);
      }
    },
    removeParticipant(roundId: number, participantName: string) {
      const round = this.rounds.find((r) => r.id === roundId);
      if (round) {
        round.participants = round.participants.filter(
          (p) => p !== participantName
        );
      }
    },
    applyDiscount(
      roundId: number,
      participantName: string,
      amount: number
    ) {
      const round = this.rounds.find((r) => r.id === roundId);
      if (round) {
        const existingDiscount = round.discounts.find(
          (d) => d.participantName === participantName
        );
        if (existingDiscount) {
          existingDiscount.amount = amount;
        } else {
          round.discounts.push({ participantName, amount });
        }
      }
    },
    removeDiscount(roundId: number, participantName: string) {
      const round = this.rounds.find((r) => r.id === roundId);
      if (round) {
        round.discounts = round.discounts.filter(
          (d) => d.participantName !== participantName
        );
      }
    },
  },
});
