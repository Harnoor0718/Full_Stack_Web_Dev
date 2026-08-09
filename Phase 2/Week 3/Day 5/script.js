const student = {
    name : "Rohan",
    marks : 85,
    printDetails : function(){
        console.log(`${this.name} scored ${this.marks}`);
    },
    printDetailsArrow : () => {
        console.log(this.name);
    }
};

student.printDetails();
student.printDetailsArrow();

