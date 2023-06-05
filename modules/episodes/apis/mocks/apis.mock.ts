export const mockAPIs = [
  (async () => (await import("./episodes-api.mock.json")).default)(),
];
