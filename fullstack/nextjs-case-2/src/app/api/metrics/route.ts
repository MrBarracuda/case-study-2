"use server";

import moment from "moment";
import { promises as fs } from 'fs';
import path from "path";
import {NextRequest, NextResponse} from "next/server";
import {revalidatePath} from "next/cache";

const metricsFilePath = path.resolve(process.cwd(), "src", "data", "metrics.json");

export const GET = async () => {
  try {
    const data = await fs.readFile(metricsFilePath, "utf-8");
    const metrics = JSON.parse(data);
    return NextResponse.json(metrics, { status: 200 });
  } catch (error) {
    return NextResponse.error();
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const data = await fs.readFile(metricsFilePath, "utf-8");
    const metrics = JSON.parse(data);

    const newMetric = {
      id: metrics.length ? metrics[metrics.length - 1].id + 1 : 1,
      ...body,
      date: body.date || moment().format("YYYY-MM-DD"),
    };

    metrics.push(newMetric);

    await fs.writeFile(metricsFilePath, JSON.stringify(metrics, null, 2)); // add a 3rd param to stringify to format the json

    revalidatePath("/");

    return NextResponse.json(newMetric, { status: 201 });
  } catch (error) {
    return NextResponse.error();
  }
};

