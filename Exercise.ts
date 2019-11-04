class Furniture {
    dimension: number;
    width: number;
    height: number;
    length: number;

    protected constructor(dimension: number) {
        this.dimension = dimension;
    }
    getDimension(): number{
        if(this.dimension==2){
            return this.length*this.height;
        }
        else if(this.dimension==3){
            return this.length*this.height*this.width;
        }
        return 0;
    }

}
class TV extends Furniture{
    constructor(height,width,length){
        super(2);
        this.height =height;
        this.width= width;
        this.length = length;
    }
}
class Couch extends Furniture{
    constructor(height,width,length){
        super(3);
        this.height =height;
        this.width= width;
        this.length = length;
    }
}
var tv = new TV(20,30,60);
var couch = new Couch(6,4,3);
console.log(tv.getDimension());
console.log(couch.getDimension());
