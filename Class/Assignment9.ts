class Organizer {
    id:number;
    name:string;

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }

    display(){
        console.log(this.id+" "+this.name);
    }
}

class Event_ {
    id:number;
    name:string;
    description:string;
    starttime:string;
    endtime:string;

    constructor(id:number, name:string, description:string, starttime:string, endtime:string){
        this.id=id;
        this.name=name;
        this.description=description;
        this.starttime=starttime;
        this.endtime=endtime;
    }

    display(){
        console.log(this.id+" "+this.name+" "+this.description+" "+this.starttime+" "+this.endtime);
    }
}

class Venue {
    id:number;
    name:string;
    description:string;
    address:string;

    constructor(id:number, name:string, description:string, address:string){
        this.id= id;
        this.name= name;
        this.description= description;
        this.address= address;
    }

    display(){
        console.log(this.id+" "+this.name+" "+this.description+" "+this.address);
    }
}

var organizer = new Organizer(1,"ABC");
organizer.display();

var event_ = new Event_(1,"ABC","XYZ","0500","0600");
event_.display();

var venue = new Venue(1,"ABC","XYZ","132564 FTFYY");
venue.display();