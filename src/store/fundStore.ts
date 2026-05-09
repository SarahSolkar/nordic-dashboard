import { create } from "zustand";
import type { Fund } from "../types";
import data from "../data/funds.json";

const funds = data.funds as Fund[];

interface FundStore {
  funds: Fund[];
  selectedFundIds: string[]; // supports multi-fund overlay
  activeFund: Fund;
  setActiveFund: (id: string) => void;
  toggleOverlayFund: (id: string) => void;
}

export const useFundStore = create<FundStore>((set, get) => ({
  funds,
  selectedFundIds: [funds[0].id],
  activeFund: funds[0],
  setActiveFund: (id) =>
    set({
      activeFund: funds.find((f) => f.id === id) ?? get().activeFund,
      selectedFundIds: [id],
    }),
  toggleOverlayFund: (id) =>
    set((s) => ({
      selectedFundIds: s.selectedFundIds.includes(id)
        ? s.selectedFundIds.filter((x) => x !== id)
        : [...s.selectedFundIds, id],
    })),
}));
