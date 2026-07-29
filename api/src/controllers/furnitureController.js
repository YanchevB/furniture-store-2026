import { createFurnitureSchema } from "../schemas/furnitureSchema";
import { furnitureService } from "../services";
import { getErrorMessage } from "../utils/errorUtils";

export async function getAll(req, res) {
    const furnitures = await furnitureService.getAll()
    res.json(furnitures);
} 

export async function getById(req, res) {
    const { furnitureId } = req.params;

    const furniture = await furnitureService.getById(furnitureId);

    if (!furniture) {
        return res.status(404).json({ message: 'Furniture not found' });
    }

    res.json(furniture);
}

export async function create(req, res) {
    const {success, data, error} = createFurnitureSchema.safeParse(req.body);

    if(!success) {
        return res.status(400).json({message: getErrorMessage(error)});
    }

    const furniture = furnitureService.create(data);

    res.json({message:'Furniture created', furniture});
}