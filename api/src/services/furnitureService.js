import { prisma } from "../lib/prisma.js";

export async function getAll() {
    const result = await prisma.furniture.findMany({
        select: {
            id: true,
            description: true,
            price: true,
            img: true
        }
    });

    return result.map(f => ({ ...f, _id: f.id}));
}

export async function getById(furnitureId) {
    const result = await prisma.furniture.findUnique({
        where: {
            id: furnitureId
        }
    })

    return result ? { ...result, _id: result.id, _ownerId: result.userId } : null;
}

export async function create(furnitureData, userId) {
    return await prisma.furniture.create({
        data: {
            ...furnitureData,
            userId
        }
    });
}

export async function remove(furnitureId, userId) {
    return await prisma.furniture.delete({
        where: {
            id: furnitureId,
            userId
        }
    });
}
