import type { PortfolioCompany } from "../types";

interface Props {
  companies: PortfolioCompany[];
}

export function AlertBanner({ companies }: Props) {
  const negative = companies.filter((c) => c.ebitdaMargin < 0);

  if (negative.length === 0) return null;

  const names = negative.map((c) => c.name).join(", ");

  return (
    <div className="bg-amber-50 border border-amber-300 text-amber-800 rounded-lg px-4 py-2 text-sm">
      ⚠ {negative.length} portfolio{" "}
      {negative.length === 1 ? "company" : "companies"} with negative EBITDA
      margin: <span className="font-semibold">{names}</span>
    </div>
  );
}
