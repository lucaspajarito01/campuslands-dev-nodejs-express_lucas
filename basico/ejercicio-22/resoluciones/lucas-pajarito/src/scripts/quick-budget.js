import { calculateRenderBudget } from "../services/render-budget.service.js";

try {
  const budget = calculateRenderBudget({ width: 1920, height: 1080, complexity: "alta" });
  console.log("Presupuesto arquitectonico 3D calculado desde script:");
  console.table(budget);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
}
