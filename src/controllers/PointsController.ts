import knex from '../database/connection';
import { Request, Response } from 'express';

class PointsController{
    async create(request: Request, response: Response) {

        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items: itemsIds
        } = request.body
    
        const trx = await knex.transaction();

        const point = {
            image: 'image_mock',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        };

        const insertedIds = await trx('points').insert(point);
    
        const point_id = insertedIds[0];
        const pointItems = itemsIds.map((item_id: Number) => ({ item_id, point_id }));
    
        await trx('point_item').insert(pointItems);
    
        return response.json({
            id: point_id,
            ...point
        });
    }
}

export default PointsController;