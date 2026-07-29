import { prisma } from "../lib/prisma.js";

export async function getAll() {
    return prisma.furniture.findMany();
}

export async function create(furnitureData) {
    return await prisma.furniture.create({
        data: furnitureData
    });
}
