export default function clone(obj: any): any { /* 深克隆 */
    let buf: any;
    if (obj instanceof Array) {
        buf = [];
        // 创建一个空数组
        let i: number = obj.length;
        while (i--) {
            buf[i] = clone(obj[i]);
        }
        return buf;
    } else if (obj instanceof Object) {
        buf = {};
        for (const k in obj) {
            buf[k] = clone(obj[k]);
        }
        return buf;
    } else {
        return obj;
    }
}
