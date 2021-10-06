// JavaScript source code

var oneA = 0;
var oneB = 0;
var twoA = 36;
var twoB = 0;
var thrA = 18;
var thrB = 36;
var fouA = 54;
var fouB = 36;
var counter = 0;

//start
printData(counter, oneA, oneB, twoA, twoB, thrA, thrB, fouA, fouB);

while (counter < 100) {
    //quarter
    oneA += 20;
    oneB += 13;
    twoA += -2;
    twoB += -23;
    thrA += -20;
    thrB += -13;
    fouA += 2;
    fouB += 23;
    counter += 12.5;
    printData(counter, oneA, oneB, twoA, twoB, thrA, thrB, fouA, fouB);

    //half
    oneA += -2;
    oneB += 23;
    twoA += 20;
    twoB += -13;
    thrA += 2;
    thrB += -23;
    fouA += -20;
    fouB += 13;
    counter += 12.5;
    printData(counter, oneA, oneB, twoA, twoB, thrA, thrB, fouA, fouB);

    // 75%
    oneA += -2;
    oneB += 23;
    twoA += 20;
    twoB += -13;
    thrA += 2;
    thrB += -23;
    fouA += -20;
    fouB += 13;
    counter += 12.5;
    printData(counter, oneA, oneB, twoA, twoB, thrA, thrB, fouA, fouB);

    //last
    oneA += 20;
    oneB += 13;
    twoA += -2;
    twoB += -23;
    thrA += -20;
    thrB += -13;
    fouA += 2;
    fouB += 23;
    counter += 12.5;
    printData(counter, oneA, oneB, twoA, twoB, thrA, thrB, fouA, fouB);

    /*   FLIPPPPPPPPP
    //swap
    oneA += 18;
    oneB += 12;
    twoA += -18;
    twoB += -12;
    thrA += -18;
    thrB += -12;
    fouA += 18;
    fouB += 12;
    counter += 12.5;
    printData(counter, oneA, oneB, twoA, twoB, thrA, thrB, fouA, fouB);

    //finish
    oneA += 18;
    oneB += -12;
    twoA += -18;
    twoB += 12;
    thrA += -18;
    thrB += 12;
    fouA += 18;
    fouB += -12;
    counter += 12.5;
    printData(counter, oneA, oneB, twoA, twoB, thrA, thrB, fouA, fouB);*/

}

/*for (let i = 0; i < 3; i++) {
    // 75%
    oneA += -2;
    oneB += 23;
    twoA += 20;
    twoB += -13;
    thrA += 2;
    thrB += -23;
    fouA += -20;
    fouB += 13;
    counter += 12.5;
    printData(counter, oneA, oneB, twoA, twoB, thrA, thrB, fouA, fouB);

    //last
    oneA += 20;
    oneB += 13;
    twoA += -2;
    twoB += -23;
    thrA += -20;
    thrB += -13;
    fouA += 2;
    fouB += 23;
    counter += 12.5;
    printData(counter, oneA, oneB, twoA, twoB, thrA, thrB, fouA, fouB);
}*/

function printData(counter, oneA, oneB, twoA, twoB, thrA, thrB, fouA, fouB) {
    console.log("            " + counter + "% {background-position: " + oneA + "px " + oneB + "px, " + twoA + "px " + twoB + "px, " + thrA + "px " + thrB + "px, " + fouA + "px " + fouB + "px;}");
}

console.log("done!");




