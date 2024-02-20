import { dbContext } from "../db/DbContext.js"

class CarsService {
    async getCars() {
        const cars = await dbContext.Cars.find()
        return cars
    }
}

export const carsService = new CarsService()