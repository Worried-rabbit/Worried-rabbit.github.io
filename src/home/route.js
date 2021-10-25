import article1 from "../article/1.天动万象.html"
import article2 from "../article/2.忽悠着你.html"
import article3 from "../article/3.男拳.html"
import article4 from "../article/4.1.html"
import article5 from "../article/5.周记.html"


function HTMLparse(str) {
    let div = document.createElement('div')
    div.innerHTML = str
    return div.querySelector('template').innerHTML
}

let article_content1 = HTMLparse(article1);
let article_content2 = HTMLparse(article2);
let article_content3 = HTMLparse(article3);
let article_content4 = HTMLparse(article4);
let article_content5 = HTMLparse(article5);


export default [{
        id: 1,
        article: article_content1
    },
    {
        id: 2,
        article: article_content2
    },
    {
        id: 3,
        article: article_content3
    }, {
        id: 4,
        article: article_content4
    }, {
        id: 5,
        article: article_content5
    }
]