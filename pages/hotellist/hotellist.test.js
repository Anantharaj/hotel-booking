import { sortHotels, debounce, throttle, searchByName, searchByPrice, getMinMaxPrice } from "./utlity";
import * as sinon from "sinon";

let clock;

beforeEach(() => {
  clock = sinon.useFakeTimers();
});

afterEach(() => {
  clock.restore();
});

test("debounce", () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 1000);

  // Call it immediately
  debouncedFunc();
  expect(func).toHaveBeenCalledTimes(0); // func not called

  // Call it several times with 500ms between each call
  for (let i = 0; i < 10; i++) {
    clock.tick(500);
    debouncedFunc();
  }
  expect(func).toHaveBeenCalledTimes(0); // func not called

  // wait 1000ms
  clock.tick(1000);
  expect(func).toHaveBeenCalledTimes(1); // func called
});

test("throttle", () => {
  const func = jest.fn();
  const throttleFunc = throttle(func, 1000);

  // Call it immediately
  throttleFunc();
  expect(func).toHaveBeenCalledTimes(0); // func not called

  // Call it several times with 500ms between each call
  for (let i = 0; i < 10; i++) {
    clock.tick(500);
    throttleFunc();
  }
  expect(func).toHaveBeenCalledTimes(5); // func not called

  // wait 1000ms
  clock.tick(1000);
  expect(func).toHaveBeenCalledTimes(6); // func called
});

describe("Hotel List Page", () => {
  const hotels = [
    {
      name: "Kempinski Hotel Mall of the Emirates",
      price: "200",
      city: "dubai",
      available_on: "2022-10-21",
    },
    {
      name: "Address Dubai Mall",
      price: "250",
      city: "dubai",
      available_on: "2022-08-15",
    },
  ];
  describe(" Hotels to be sorted", () => {
    it("By Albhabet", () => {
      const sorted = sortHotels(hotels, "name");
      expect(sorted[0].name).toBe("Address Dubai Mall");
    });

    it("By Price", () => {
      const sorted = sortHotels(hotels, "price");
      expect(sorted[0].price).toBe("200");
    });

    it("if passes empty array", () => {
      const sorted = sortHotels([], "price");
      expect(sorted.length).toBe(0);
    });
  });

  describe(" Hotels to filer by Name", () => {
    it("By String", () => {
      const filtered = searchByName("Address", hotels);
      expect(filtered.length).toBe(1);
    });

    it("By Number", () => {
      const filtered = searchByName(6789, hotels);
      expect(filtered.length).toBe(0);
    });

    it("if passes Undefined", () => {
      const filtered = searchByName(undefined, hotels);
      expect(filtered.length).toBe(0);
    });
  });

  describe(" Hotels to filer by Price", () => {
    it("By String", () => {
      const filtered = searchByPrice("250", hotels);
      expect(filtered.length).toBe(1);
    });

    it("By Number", () => {
      const filtered = searchByPrice(6789, hotels);
      expect(filtered.length).toBe(0);
    });

    it("if passes Undefined", () => {
      const filtered = searchByPrice(undefined, hotels);
      expect(filtered.length).toBe(0);
    });
  });

  describe(" Hotels to filer by Price", () => {
    const hotels = [
      {
        name: "Kempinski Hotel Mall of the Emirates",
        price: "200",
        city: "dubai",
        available_on: "2022-10-21",
      },
      {
        name: "Address Dubai Mall",
        price: "450",
        city: "dubai",
        available_on: "2022-08-15",
      },
      {
        name: "Address Dubai Mall",
        price: "350",
        city: "dubai",
        available_on: "2022-08-15",
      },
    ];

    it("By String", () => {
      const minMax = getMinMaxPrice(hotels);
      expect(minMax).toEqual(expect.arrayContaining([200, 450]));
    });

    it("If passes null", () => {
      const minMax = getMinMaxPrice(null);
      expect(minMax).toEqual(expect.arrayContaining([0, 0]));
    });

    it("if passes Undefined", () => {
      const minMax = getMinMaxPrice(undefined);
      expect(minMax).toEqual(expect.arrayContaining([0, 0]));
    });
  });
});
