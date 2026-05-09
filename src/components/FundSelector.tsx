import Select from "react-select";
import { useFundStore } from "../store/fundStore";

export function FundSelector() {
  const { funds, activeFund, setActiveFund } = useFundStore();
  const options = funds.map((f) => ({ value: f.id, label: f.name }));

  return (
    <Select
      options={options}
      value={options.find((o) => o.value === activeFund.id)}
      onChange={(opt) => opt && setActiveFund(opt.value)}
      className="w-72"
    />
  );
}
