function getRandomInt(min = 0, max = 1000) {
    if (!validArgs(min, max)) return Error('Invalid Arguments');
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validArgs(...args) {
    return !args.map(arg => /^\d+$/.test(arg)).includes(false);
}

module.exports = getRandomInt;
