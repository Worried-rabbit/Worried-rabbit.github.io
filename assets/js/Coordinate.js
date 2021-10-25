class Coordinate {
    constructor(props) {
        this.props = props;
        this.res;
        this.exec();
    }
    exec() {
        let res = this.props.match(/\S+|\n/g);
        res = res.join('');
        this.res = res.split('\n');
        this.flipCoordinate()
    }

    flipCoordinate() {
        let arrList = []
        this.res.forEach(element => {
            let arr = element.split(',');
            arrList.push(arr.reverse().join(','));
        });
        return arrList.join(';');
    }

}

let coordinate = new Coordinate(`43.377985879999997,111.14385013
43.374493360000002,111.14416307
43.371157889999999,111.1450768
43.364987579999998,111.14892911
43.333861829999996,111.16777973000001
43.322141780000003,111.17557764
43.310331769999998,111.18416306
43.305079290000002,111.18778279999999`);