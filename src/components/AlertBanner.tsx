import type { PortfolioCompany } from "../types";

export function AlertBanner({ companies }: { companies: PortfolioCompany[] }) {
  const count = companies.filter((c) => c.ebitdaMargin < 0).length;
  if (count === 0) return null;
  return (
    <div className="bg-amber-50 border border-amber-300 text-amber-800 rounded-lg px-4 py-2 text-sm">
      ⚠ {count} portfolio {count === 1 ? "company" : "companies"} with negative
      EBITDA margin
    </div>
  );
}
