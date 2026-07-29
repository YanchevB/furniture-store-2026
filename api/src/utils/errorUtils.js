import * as zod from 'zod';

export function getErrorMessage(error) {
    switch (error.name) {
        case 'ZodError':
            return Object.values(zod.flattenError(error).fieldErrors).flat().join(', ') || 'Invalid input';
        default:
            return error.message || 'An unknown error occurred';
    }
}