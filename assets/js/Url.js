export default class Url {
    constructor(props) {
        this.props = props;
        this.json = {};
        this.keyArr = [];
        this.strArr = [];
        this.exec();
    }

    exec() {
        if (this.props.constructor.toString().indexOf('Object') != -1) {
            this.urlMerge();
        } else {
            this.urlSplit();
        }
    }

    urlSplit() {
        let str = this.props.substring(this.props.indexOf('?') + 1);
        this.keyArr = str.split("&");
        this.keyArr.forEach(item => {
            let tempArr = item.split('=');
            this.json[tempArr[0]] = tempArr[1];
        });
    }

    urlMerge() {
        let str;
        for (const key in this.props) {
            str = key + '=' + this.props[key];
            this.strArr.push(str);
        }
    }

    get(name) {
        return this.json[name];
    }

    parse() {
        return this.strArr.join('&');
    }
}