export function fromKelvinTo(toUnits, val) {
    switch (toUnits) {
        case 'F':
            return Math.round(1.8 * (val-273) + 32);
        case 'C':
        default:
            return Math.round(val-273);
    }
}

export function toKelvinFrom(fromUnits, val) {
    switch (fromUnits) {
        case 'F':
            return (val-32)/1.8 + 273;
        case 'C':
        default:
            return val + 273;
    }
}
