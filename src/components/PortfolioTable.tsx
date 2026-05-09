import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import type { PortfolioCompany } from "../types";

const columns: MRT_ColumnDef<PortfolioCompany>[] = [
  { accessorKey: "name", header: "Company" },
  { accessorKey: "sector", header: "Sector" },
  { accessorKey: "country", header: "Country" },
  {
    accessorKey: "revenue",
    header: "Revenue",
    Cell: ({ cell }) => `$${(cell.getValue<number>() / 1e6).toFixed(1)}M`,
  },
  {
    accessorKey: "ebitda",
    header: "EBITDA",
    Cell: ({ cell }) => `$${(cell.getValue<number>() / 1e6).toFixed(2)}M`,
  },
  {
    accessorKey: "ebitdaMargin",
    header: "EBITDA Margin",
    Cell: ({ cell }) => `${cell.getValue<number>().toFixed(1)}%`,
  },
  {
    accessorKey: "currentValue",
    header: "Current Value",
    Cell: ({ cell }) => `$${(cell.getValue<number>() / 1e6).toFixed(1)}M`,
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

export function PortfolioTable({
  companies,
}: {
  companies: PortfolioCompany[];
}) {
  const table = useMaterialReactTable({
    columns,
    data: companies,
    muiTableBodyRowProps: ({ row }) => ({
      sx: {
        backgroundColor: row.original.flags.includes("at-risk")
          ? "#FCEBEB"
          : row.original.flags.includes("watch")
            ? "#FAEEDA"
            : undefined,
      },
    }),
  });
  return <MaterialReactTable table={table} />;
}
