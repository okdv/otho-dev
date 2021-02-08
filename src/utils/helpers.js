export function shuffleArray(arr) {
    let i = arr.length - 1;
    for (;i>0;i--) {
        const j = Math.floor(Math.random() * (i+1));
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr
}