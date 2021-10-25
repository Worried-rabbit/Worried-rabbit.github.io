export default class Markdown {
    constructor(props) {
        this.parse = props;
        this.res = [];
        this.exec();
    }

    exec() {
        let res = this.parse.match(/(#+\s*)|(\S+\s+|\S+|)|\n/g);
        res = res.join('');
        res.split('\n').forEach(text => {
            this.res.push(text.trim());
        });
        console.log(this.res + '1');
    }

    parseHTML() {
        let textArr = [];
        this.res.forEach(element => {
            let arr = [];
            if (element.indexOf('#') == 0) {
                arr = element.match(/(#+\s(1))|(\S+)|\n/g);
                console.log(arr + 2);
            } else {
                arr = element;
                console.log(arr + 3);
            }
            if (Array.isArray(arr)) {
                let num;
                if (arr[0].length > 6) {
                    num = 6;
                } else {
                    num = arr[0].length
                }
                let el = document.createElement('h' + num);
                el.innerHTML = arr[1];
                textArr.push(el);
            } else {
                let el = document.createElement('p');
                el.innerHTML = arr;
                textArr.push(el)
            }
        });
        console.log(textArr + 4);
        return textArr;
    }
}