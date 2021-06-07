var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer.prototype.display = function () {
        console.log(this.id + " " + this.name);
    };
    return Organizer;
}());
var Event_ = /** @class */ (function () {
    function Event_(id, name, description, starttime, endtime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.starttime = starttime;
        this.endtime = endtime;
    }
    Event_.prototype.display = function () {
        console.log(this.id + " " + this.name + " " + this.description + " " + this.starttime + " " + this.endtime);
    };
    return Event_;
}());
var Venue = /** @class */ (function () {
    function Venue(id, name, description, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
    Venue.prototype.display = function () {
        console.log(this.id + " " + this.name + " " + this.description + " " + this.address);
    };
    return Venue;
}());
var organizer = new Organizer(1, "ABC");
organizer.display();
var event_ = new Event_(1, "ABC", "XYZ", "0500", "0600");
event_.display();
var venue = new Venue(1, "ABC", "XYZ", "132564 FTFYY");
venue.display();
