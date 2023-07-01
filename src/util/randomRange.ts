const randomRange = (a: number, b: number) => {
    return Math.round(Math.random() * (b - a - 1) + a)
}

export default randomRange