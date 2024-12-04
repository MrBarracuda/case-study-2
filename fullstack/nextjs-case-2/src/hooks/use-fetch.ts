import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Metric {
  id?: number;
  name: string;
  value: number;
  date?: string;
  category: string;
}

export const useAddMetric = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newMetric: Metric) =>
      fetch("http://localhost:3000/api/metrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMetric),
      }).then(res => {
        if (!res.ok) throw new Error("Failed to add the metric");
        return res.json();
      }),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["metrics"] });
    },
  });
};


