export const mockAPIs = [
  (async () => (await import("./location-api.mock.json")).default)(),
];
