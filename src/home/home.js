// import Ani from "../../assets/js/Ani.js"
import Translate from "../../assets/js/Translate.js"
import Animate from "../../assets/js/Animate.js"
import Ellipsis from "../../assets/js/Ellipsis.js"
import articles from "./route.js"
String.prototype.ellipsis = function(num, symbol = '...') {
    if (this.length > num) {
        let str = this.substr(0, num);
        str = str + symbol;
        return str;
    }
    return this;
};
let content = document.querySelector('.content_one');
let mainContent = document.querySelector('.main_content');
let btn = document.querySelector('.btn');
btn.remove();
content.remove();

function HTMLparse(str) {
    let div = document.createElement('div')
    div.innerHTML = str
    return div
}

let pageNum, pageIndex, pageCount, fisrtNum;
pageCount = 2;
pageIndex = 1;
pageNum = articles.length % pageCount == 0 ? articles.length / pageCount : parseInt(articles.length / pageCount) + 1;
if (articles.length < pageCount) {
    fisrtNum = articles.length;
} else {
    fisrtNum = pageCount;
}

function renderHTML() {
    for (let i = (pageIndex - 1) * pageCount; i < fisrtNum; i++) {
        let newContent = content.cloneNode(true);
        let div = HTMLparse(articles[i].article);
        let text = newContent.querySelector('.content_text')
        newContent.insertBefore(div.querySelector('.title'), text);
        newContent.querySelector('.title').setAttribute('data-id', articles[i].id);
        text.appendChild(div.querySelector('.content'));
        new Ellipsis({
            el: text.querySelector('.content'),
            textCount: 110,
            findAllText: '',
            showFindAllButton: true
        });
        mainContent.insertBefore(newContent, document.querySelector('.btn'))
        Animate.create().use(Translate).mount(document.querySelectorAll('.content_one'));
    }
}

renderHTML();


mainContent.appendChild(btn);

function dataLoad() {
    pageIndex++;
    if (pageIndex == pageNum) {
        btn.style.display = 'none'
    }
    if (pageIndex == pageNum) {
        if ((articles.length - (pageIndex - 1) * 2) < pageCount) {
            fisrtNum = articles.length;
        } else {
            fisrtNum = pageCount + (pageIndex - 1) * 2;
        }
    } else {
        fisrtNum = pageCount + (pageIndex - 1) * 2;
    }
    renderHTML();
}
btn.addEventListener('click', dataLoad);


let atitle = document.querySelectorAll('.title')
Array.from(atitle).forEach(el => {
    el.addEventListener('click', function() {
        window.location.href = `articleDetails.html?id=${this.dataset.id}`
    })
})