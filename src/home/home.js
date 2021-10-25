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
content.remove();

function HTMLparse(str) {
    let div = document.createElement('div')
    div.innerHTML = str
    return div
}

articles.forEach(element => {
    let newContent = content.cloneNode(true);
    let div = HTMLparse(element.article);
    let text = newContent.querySelector('.content_text')
    newContent.insertBefore(div.querySelector('.title'), text);
    newContent.querySelector('.title').setAttribute('data-id', element.id);
    text.appendChild(div.querySelector('.content'));
    new Ellipsis({
        el: text.querySelector('.content'),
        textCount: 110,
        findAllText: '',
        showFindAllButton: true
    });
    mainContent.appendChild(newContent);
});

let atitle = document.querySelectorAll('.title')
Array.from(atitle).forEach(el => {
    el.addEventListener('click', function() {
        window.location.href = `articleDetails.html?id=${this.dataset.id}`
    })
})

//作业五：  
let animate = Animate.create().use(Translate).mount(document.querySelectorAll('.content_one'));