import rentalsRepository from "repositories/rentals-repository";

import rentalsService from "services/rentals-service";

describe("Rentals Service Unit Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return all rentals', async () => {
    jest.spyOn(rentalsRepository, "getRentals").mockResolvedValueOnce([
      {id: 1, closed: false, date: new Date(), endDate: new Date(), userId: 1},
      {id: 2, closed: false, date: new Date(), endDate: new Date(), userId: 1}
    ]);
    
    const result = await rentalsService.getRentals()
    expect(result).toHaveLength(2)
  });
});