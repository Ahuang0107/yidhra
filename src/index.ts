/**
 * detect the datatype of obj
 * @param obj
 */
export const typeOf = (obj: any) => {
    return Object.prototype.toString.call(obj).toString()
        .split(' ')[1].slice(0, -1)
}
/**
 * unique the item of array
 * @param arr
 */
export const unique = (arr: []) => {
    return arr.filter((item, index, array) => {
        return array.indexOf(item) === index
    })
}

/**
 * flat the array
 * @param arr
 */
export const flatten = (arr: any[]): any[] => {
    let res: any[] = new Array<any>()
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index]
        if (Array.isArray(item)) {
            res.push(...flatten(item))
        } else {
            res.push(item)
        }
    }
    return res
}
