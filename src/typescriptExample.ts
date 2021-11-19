class Add{
    a: number;
    b: number;

    constructor(a:number,b:number){
        this.a=a;
        this.b=b;
    }

    display(){
        console.log("Value of a:"+this.a);
        console.log("Value of b:"+this.b);
        console.log("Sum of a and b:"+(this.a+this.b));
    }
}

let add=new Add(2,3);
add.display();