export default getUvIndexColor

function getUvIndexColor(index: number) {
    if(index >= 0 && index <= 2) return "#41A94A"
    if(index >= 3 && index <= 5) return "#F5E50C"
    if(index >= 6 && index <= 7) return "#F17721"
    if(index >= 8 && index <= 10) return "#E22426"
    if(index >= 11) return "#A88BC1"
    if(!index || index < 0) return "#000000"
}