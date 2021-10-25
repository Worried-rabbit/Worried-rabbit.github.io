import articles from "../home/route.js";
import Markdown from '../../assets/js/MD.js'

class Url {
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
        return this.strArr.join('&')
    }
}



let url = new Url(window.location.search);
let url2 = new Url({
    name: 'xiaoming',
    id: '1'
});
console.log(url.get('id'));
console.log(url2.parse());

function HTMLparse(str) {
    let div = document.createElement('div')
    div.innerHTML = str
    return div
}


for (let i = 0; i < articles.length; i++) {
    if (articles[i].id == url.get('id')) {
        let oMsg = articles[i].article;
        let div = HTMLparse(oMsg);
        let title = div.querySelector('.title').innerHTML;
        document.querySelector('.content_text').querySelector('h1').innerHTML = title;
        let content = div.querySelector('.content').innerHTML;
        document.querySelector('.article').innerHTML = content;
    } else {
        continue;
    }
}
let el = document.querySelector('.article').innerHTML;

let md = new Markdown(el);
let div = document.createElement('div');
md.parseHTML().forEach(element => {
    div.append(element);
});
document.querySelector('.article').innerHTML = div.innerHTML;