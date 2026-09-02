import { existsSync, readFileSync } from "node:fs";
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

describe("deck links", () => {
  it("has at least one lecture linking a real, generated deck", () => {
    const lecturesWithSlides = api.nodes.filter(
      (node) => node.type === "lectures" && typeof node.meta?.slides === "string",
    );
    expect(lecturesWithSlides.length).toBeGreaterThan(0);

    const resolved = lecturesWithSlides.filter((node) => {
      const slug = String(node.meta?.slides).replace(/^\/decks\//, "").replace(/\/$/, "");
      return existsSync(resolve("dist/decks", slug, "index.html"));
    });
    expect(
      resolved.length,
      `no lecture's slides field resolved to a built deck: ${lecturesWithSlides
        .map((n) => `${n.id}->${n.meta?.slides}`)
        .join(", ")}`,
    ).toBeGreaterThan(0);
  });
});
