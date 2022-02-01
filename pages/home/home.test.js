import InputSlider from "./index";
import { filterByDate, getNumberOfNights } from "./utility";

describe("Hotel Search Page", () => {
  describe("Get Number of nights", () => {
    const from = new Date();
    const to = new Date(from);
    to.setDate(to.getDate() + 2);

    it("By date", () => {
      const numberOfNights = getNumberOfNights(from, to);
      expect(numberOfNights).toEqual(2);
    });

    it("If passes null", () => {
      const numberOfNights = getNumberOfNights(null, null);
      expect(numberOfNights).toEqual(0);
    });

    it("If passes empty", () => {
      const numberOfNights = getNumberOfNights("dfa", "df");
      expect(numberOfNights).toEqual(NaN);
    });
  });

  describe("Filtered by date", () => {
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

    const from = new Date("2022-10-20");
    const to = new Date("2022-10-21");

    it("By date", () => {
      const filtered = filterByDate(from, to, hotels);
      expect(filtered.length).toEqual(0);
    });

    it("If passes null", () => {
      const filtered = filterByDate(null, null);
      expect(filtered.length).toEqual(0);
    });

    it("If passes empty Array", () => {
      const filtered = filterByDate(from, to, []);
      expect(filtered.length).toEqual(0);
    });
  });
});
