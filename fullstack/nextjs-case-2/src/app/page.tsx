import {columns, Data} from "@/components/table/columns";
import Container from "@/components/container";
import {DataTable} from "@/components/table/data-table";
import Chart from "@/components/chart";
import {AddMetricForm} from "@/components/add-metric-form";
import {Suspense} from "react";

export default async function Home() {
 const data = await fetchData();

  return (
    <Container>
      <div className="space-y-10">
        <AddMetricForm/>
        <Suspense fallback={<div>Loading...</div>}>
          <DataTable columns={columns} data={data} />
          <Chart data={data}/>
        </Suspense>
      </div>
    </Container>
  )
}

async function fetchData(): Promise<Data[]> {
  const response = await fetch("http://localhost:3000/api/metrics", { cache: 'no-store' });
  return await response.json();
}