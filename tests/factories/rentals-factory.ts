import prisma from "database";
import { Rental } from "@prisma/client";
import { faker } from "@faker-js/faker";

type RentalInput = Omit<Rental, "id" | "date" | "closed">
export async function createRental() {
    const data: RentalInput = buildRentalInput()
};

function buildRentalInput() {
    return {
        userId: faker.number.int(),
        endDate: faker.date.soon({ days: 3 })
    };
}