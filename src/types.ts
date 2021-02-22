type WouldBe<T> = { [P in keyof T]?: unknown };

export const isRecord = <T extends Record<string, unknown>>(
  value: unknown
): value is WouldBe<T> => {
  return typeof value === "object" && value !== null;
};
