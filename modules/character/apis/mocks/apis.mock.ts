export const mockAPIs = [
  (async () => (await import("./character-api.mock.json")).default)(),
];
