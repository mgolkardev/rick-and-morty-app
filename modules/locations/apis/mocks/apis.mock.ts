export const mockAPIs = [
  (async () => (await import("./locations-api.mock.json")).default)(),
];
