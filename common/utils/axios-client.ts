import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { mockAPIs as mockCharacterAPIs } from "modules/characters/apis/mocks/apis.mock";
import { mockAPIs as mockCharacterAPI } from "modules/character/apis/mocks/apis.mock";
import { mockAPIs as mockLocationAPIs } from "modules/locations/apis/mocks/apis.mock";
import { mockAPIs as mockLocationAPI } from "modules/location/apis/mocks/apis.mock";
import { mockAPIs as mockEpisodesAPI } from "modules/episodes/apis/mocks/apis.mock";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// mock data if NEXT_PUBLIC_API_BASE_URL is empty
if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
  (async () => {
    const mock = new MockAdapter(axiosClient, { delayResponse: 500 });
    for (const dataPromise of [
      ...mockCharacterAPIs,
      ...mockCharacterAPI,
      ...mockLocationAPIs,
      ...mockLocationAPI,
      ...mockEpisodesAPI,
    ]) {
      const data = await dataPromise;
      switch (data.method.toUpperCase()) {
        case "GET":
          mock
            .onGet(data.endpoint)
            .reply(data.status, data.response, data.headers);
          break;
        // TODO add another methods
      }
    }
  })();
}

export { axiosClient };
