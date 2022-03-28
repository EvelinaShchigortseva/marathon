export function correctDate(data) {
    let date = new Date(data);
    return date.toTimeString().split(" ")[0].slice(0, -3);
}

