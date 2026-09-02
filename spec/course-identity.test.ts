import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface CourseApi {
  course: { code: string };
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

describe("course identity", () => {
  it("keeps the assigned 646 suffix in the course code", () => {
    expect(api.course.code).toMatch(/646$/);
  });
});
