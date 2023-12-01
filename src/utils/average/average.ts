export default average;

/* counts average value of all in array */
function average(arr: number[]): number {
    const sum = arr.reduce((acc, val) => acc + val, 0)
    if(arr.length) {
        return Math.round(sum/arr.length)
    }

    return 0;
}