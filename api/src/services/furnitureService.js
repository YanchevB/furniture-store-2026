import { prisma } from "../lib/prisma.js";

export async function getAll() {
    const result = await prisma.furniture.findMany();

    return result.map(f => ({ ...f, _id: f.id}));
}

export async function create(furnitureData) {
    return await prisma.furniture.create({
        data: furnitureData
    });
}
