import '../css/Ani.css'
import Animate from './Animate';
export default class Translate extends Animate {
    constructor() {
        super();
    }

    exec() {
        this.el.forEach(element => {
            this.out(element);
        });
    }

    out(el) {
        console.log(1);
        el.classList.add('content');
    }

    static install() {
        return new Translate();
    }
}