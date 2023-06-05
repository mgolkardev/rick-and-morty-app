export const mockAPIs = [
  (async () => (await import("./characters-api.mock.json")).default)(),
  (async () => (await import("./characters-with-ids-api.mock.json")).default)(),
];
