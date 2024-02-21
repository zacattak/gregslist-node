import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class CarsService {
    async getCars() {
        const cars = await dbContext.Cars.find()
        return cars
    }
    async createCar(carData) {
        const car = await dbContext.Cars.create(carData)
        return car
    }
    async getCarById(carId) {
        const car = await dbContext.Cars.findById(carId)
        if (!car) {
            throw new BadRequest('No car found with id')
        }

    }
}

export const carsService = new CarsService()