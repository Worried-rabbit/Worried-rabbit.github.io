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
    }

    parseHTML() {
        let textArr = [];
        this.res.forEach(element => {
            let arr = [];
            if (element.indexOf('#') == 0) {
                arr = element.match(/(#+\s(1))|(\S+)|\n/g);
            } else {
                arr = element;
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
        return textArr;
    }
}



var deptData = [{
        deptName: '某某公司',
        type: 2
    },
    {
        deptName: '子公司',
        type: 4
    },
    {
        deptName: '子子部门',
        type: 5
    }
];
var a = '2->4，5';
var resu = format() // 某某公司->子公司，子子部门


function format() {
    //首先把数字放在数组里面
    let numArr = [];
    let strArr = [];
    let str = '';
    a.replace(/\d/g, function(item) {
        numArr.push(item);
    });
    //运用replace来看其他的
    a.replace(/\D+/g, function(item) {
        strArr.push(item);
    });
    deptData.forEach((item, index) => {
        if (item.type == numArr[index]) {
            if (strArr[index]) {
                str += item.deptName + strArr[index];
            } else {
                str += item.deptName;
            }
        }
    });
    return str;
}


console.log(resu);
//第三个作业;
var text = '{{ username }}';
// username是一个变量  用正则匹配到 username
let resStr = text.replace(/[^{}\n\s]\S+/g, function(item) {
    console.log(item);
});