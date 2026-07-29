import { createFurnitureSchema } from "../schemas/furnitureSchema";
import { furnitureService } from "../services";
import { getErrorMessage } from "../utils/errorUtils";

export function getAll(req, res) {
    console.log(req.user);
    res.json([]);
} 

export async function create(req, res) {
    const {success, data, error} = createFurnitureSchema.safeParse(req.body);

    if(!success) {
        return res.status(400).json({message: getErrorMessage(error)});
    }

    const furniture = furnitureService.create(data);

    res.json({message:'Furniture created', furniture});
}