"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Data = {
  id: string
  name: string
  category: string
  value: number
  date: string
}

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
]
