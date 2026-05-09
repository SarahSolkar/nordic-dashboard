import { FundSelector } from "./components/FundSelector";
import { KPICards } from "./components/KPICards";
import { NavChart } from "./components/NavChart";
import { PortfolioTable } from "./components/PortfolioTable";
import { AlertBanner } from "./components/AlertBanner";
import { useFundStore } from "./store/fundStore";

export default function App() {
  const { activeFund, funds, selectedFundIds, toggleOverlayFund } =
    useFundStore();

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-6">
      {/* Top bar */}
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">
          Nordic Analytics
        </h1>
        <FundSelector />
      </header>

      <AlertBanner companies={activeFund.portfolioCompanies} />

      <KPICards metrics={activeFund.metrics} />

      {/* Chart + overlay toggles */}
      <section className="bg-white rounded-xl border border-gray-200 p-4 space-y-3">
        <div className="flex items-center gap-4">
          <h2 className="text-sm font-medium text-gray-700">NAV Performance</h2>
          {funds.map((f) => (
            <label
              key={f.id}
              className="flex items-center gap-1.5 text-xs text-gray-600"
            >
              <input
                type="checkbox"
                checked={selectedFundIds.includes(f.id)}
                onChange={() => toggleOverlayFund(f.id)}
              />
              {f.name}
            </label>
          ))}
        </div>
        <NavChart />
      </section>

      <section className="bg-white rounded-xl border border-gray-200 p-4">
        <h2 className="text-sm font-medium text-gray-700 mb-3">
          Portfolio Companies
        </h2>
        <PortfolioTable companies={activeFund.portfolioCompanies} />
      </section>
    </div>
  );
}
