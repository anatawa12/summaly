export default function (val) {
    if (val === undefined) {
        return true;
    }
    else if (val === null) {
        return true;
    }
    else if (val.trim() === '') {
        return true;
    }
    else {
        return false;
    }
}
