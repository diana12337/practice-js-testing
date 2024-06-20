export default function randomNumber(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Value is not a number');
    }


    return Math.floor(Math.random() * (max - min + 1) + min);
}

