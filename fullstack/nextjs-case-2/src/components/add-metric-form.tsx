"use client";

import { useState } from "react";
import {useAddMetric} from "@/hooks/use-fetch";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export function AddMetricForm() {
  const [metric, setMetric] = useState({
    name: "",
    value: 0,
    category: "",
  });
  const addMetric = useAddMetric();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMetric.mutate(metric, {
      onSuccess: () => {
        alert("Metric added successfully!");
        setMetric({ name: "", value: 0, category: "" });
      },
    });
  };

  return (
    <div className="p-4 border rounded-xl shadow-md">
      <form onSubmit={handleSubmit} className="flex flex-row gap-x-2">
      <Input
        value={metric.name}
        onChange={(e) => setMetric({ ...metric, name: e.target.value })}
        placeholder="Name"
        required
      />
      <Input
        type="number"
        placeholder="Value"
        value={metric.value}
        onChange={(e) =>
          setMetric({ ...metric, value: parseInt(e.target.value) })
        }
        required
      />
      <Input
        type="text"
        placeholder="Category"
        value={metric.category}
        onChange={(e) => setMetric({ ...metric, category: e.target.value })}
        required
      />
      <Button type="submit">Add</Button>
    </form>
    </div>
  );
}