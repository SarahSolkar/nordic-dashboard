import type { FundMetrics } from "../types";

interface Props {
  metrics: FundMetrics;
}

const fmt = (n: number, type: "pct" | "mult" | "currency") => {
  if (type === "pct") return `${n.toFixed(1)}%`;
  if (type === "mult") return `${n.toFixed(2)}×`;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);
};

const cards = [
  { key: "irr", label: "IRR", type: "pct" as const },
  { key: "tvpi", label: "TVPI", type: "mult" as const },
  { key: "dpi", label: "DPI", type: "mult" as const },
  { key: "rvpi", label: "RVPI", type: "mult" as const },
  { key: "nav", label: "NAV", type: "currency" as const },
];

export function KPICards({ metrics }: Props) {
  return (
    <div className="grid grid-cols-5 gap-3">
      {cards.map(({ key, label, type }) => (
        <div
          key={key}
          className="bg-white rounded-xl border border-gray-200 px-4 py-3 space-y-1"
        >
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
            {label}
          </p>
          <p className="text-xl font-semibold text-gray-900">
            {fmt(metrics[key as keyof FundMetrics], type)}
          </p>
        </div>
      ))}
    </div>
  );
}
