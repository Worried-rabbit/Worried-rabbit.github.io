import articles from "../home/route.js";
import Markdown from '../../assets/js/MD.js'
import Url from '../../assets/js/Url.js'


let url = new Url(window.location.search);
let url2 = new Url({
    name: 'xiaoming',
    id: '1'
});
console.log(url.get('id'));
console.log(url2.parse());

function HTMLparse(str) {
    let div = document.createElement('div')
    div.innerHTML = str;
    return div;
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
console.log(el);
let md = new Markdown(el);
let div = document.createElement('div');
md.parseHTML().forEach(element => {
    div.append(element);
});
document.querySelector('.article').innerHTML = div.innerHTML;