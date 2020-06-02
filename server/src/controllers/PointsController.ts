import { Request, Response} from 'express';
import knex from '../database/connection';

class PointsController {
  async create(request: Request, response: Response){

    const trx = await knex.transaction();

    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = request.body;
  
    const [id] = await trx('points').insert({
      image: 'image-fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    });
  
    const pointItems = items.map((item_id: number) =>{
      return {
        item_id,
        point_id: id
      }
    })
  
    await trx('point_items').insert(pointItems);
  
    return response.json({success: true});
  }
}

export default PointsController;