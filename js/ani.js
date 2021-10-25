class Ani {
    constructor(props) {
        this.targets = props.targets;
        this.reverse = props.reverse || false
        this.count = props.count || 1;
        this.props = props;
        this.exec();
    }

    exec() {
        let targets = this.targets.slice();
        this.addEventListener(targets);
    }

    get curIndex() {
        return this.props.count - this.count + 1;
    }

    get lastTarget() {
        return this.targets[this.needReverse ? 0 : this.targets.length - 1];
    }

    get needReverse() {
        if (Array.isArray(this.reverse)) {
            return this.reverse.includes(this.curIndex);
        }
        if (this.reverse === true) {
            return true
        }
    }
    addEventListener(targets) {
        if (!targets.length) return;
        let target = this.needReverse ? targets.pop() : targets.shift();
        target.el.classList.add(target.animationClassName);
        let _this = this;
        let handleEventlist = function(e) {
            e.target.classList.remove(target.animationClassName);
            _this.addEventListener(targets);
            target.el.removeEventListener('animationend', handleEventlist);
            console.log(e.target);
            console.log(_this.lastTarget.el);
            if (e.target == _this.lastTarget.el && _this.count > 1) {
                _this.count--;
                setTimeout(function() {
                    _this.exec();
                })
            }
        }
        target.el.addEventListener('animationend', handleEventlist);
    }
}

var ani = new Ani({
    targets: [{
        el: document.querySelector('.avator_img'),
        animationClassName: 'avator',
    }, {
        el: document.querySelector('.loding_text'),
        animationClassName: 'loding',
    }, {
        el: document.querySelector('.end'),
        animationClassName: 'btn',
    }, {
        el: document.querySelector('.span_text'),
        animationClassName: 'footer_span',
    }],
    count: 2,
    reverse: [2, 4]
})