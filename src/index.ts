export const typeOf = (obj: any) => {
    const type = Object.prototype.toString.call(obj).toString()
    return type.split(' ')[1].slice(0, -1)
}
