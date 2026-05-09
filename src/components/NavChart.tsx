import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { useFundStore } from "../store/fundStore";

export function NavChart() {
  const { funds, selectedFundIds } = useFundStore();

  const series: Highcharts.SeriesLineOptions[] = funds
    .filter((f) => selectedFundIds.includes(f.id))
    .map((f) => ({
      name: f.name,
      type: "line",
      data: f.navHistory.map((p) => p.nav),
    }));

  const options: Highcharts.Options = {
    title: { text: undefined },
    chart: {
      backgroundColor: "transparent",
      style: { fontFamily: "inherit" },
    },
    xAxis: {
      categories: funds[0].navHistory.map((p) => p.month),
      labels: { rotation: -30 },
    },
    yAxis: {
      title: { text: "NAV (USD)" },
      labels: {
        formatter() {
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            notation: "compact",
            maximumFractionDigits: 0,
          }).format(this.value as number);
        },
      },
    },
    tooltip: {
      formatter() {
        return `<b>${this.series.name}</b><br/>${new Intl.NumberFormat(
          "en-US",
          {
            style: "currency",
            currency: "USD",
            notation: "compact",
          },
        ).format(this.y ?? 0)}`;
      },
    },
    legend: { enabled: true },
    credits: { enabled: false },
    series,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
