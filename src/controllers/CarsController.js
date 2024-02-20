import { carsService } from "../services/CarsService.js"
import BaseController from "../utils/BaseController.js"

export class CarsController extends BaseController {
    constructor() {
        super('api/cars')
        this.router
            .get('', this.getCars)
    }



    /**
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 * @param {import("express").NextFunction} next
 */



    async getCars(request, response, next) {
        try {
            const cars = await carsService.getCars()
            response.send(cars)
        } catch (error) {
            next(error)
        }
    }
}