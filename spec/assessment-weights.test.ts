import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

describe("assessment weights", () => {
  it("sum to 100 across the whole course", () => {
    const assessments = api.nodes.filter((node) => node.type === "assessments");
    expect(assessments.length).toBeGreaterThan(0);

    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total, `weights: ${assessments.map((a) => `${a.id}=${a.meta?.weight}`).join(", ")}`).toBe(
      100,
    );
  });
});
