import '../css/Ani.css'
import Animate from './Animate';
export default class Translate extends Animate {
    constructor() {
        super();
    }

    exec() {
        this.el.forEach(element => {
            this.out(element)
        });
    }

    out(el) {
        setTimeout(() => {
            el.classList.add('content');
        }, 20);
    }

    static install() {
        return new Translate();
    }
}