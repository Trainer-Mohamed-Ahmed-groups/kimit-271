var myName = "Mohamed",
    lastName = "Ahmed",
    job = "frontend developer and frontend instructor";
// 0123456      20 21 22 23
console.log(myName);



/**************************** length ************************************/
console.log(myName.length);

/**************************** charAt ************************************/

console.log(myName.charAt(0))
/**************************** charCodeAt ***************************/

console.log(lastName.charCodeAt(0))

/**************************** fromCharCode ************************************/

console.log(String.fromCharCode(67))
/**************************** concat ************************************/

console.log(myName + " " + lastName)

console.log(`${myName} ${lastName}`)

console.log(myName.concat(lastName))

/**************************** startsWith ************************************/

console.log(job.startsWith("front"))
console.log(job.startsWith("de", 9))

/**************************** endsWith ************************************/

console.log(job.endsWith("instructor"))

/**************************** includes ************************************/

console.log(job.includes("z"))

/**************************** indexOf ************************************/
console.log(job.indexOf("frontend"))

/**************************** lastIndexOf ************************************/
console.log(job.lastIndexOf("frontend"))

/**************************** match ************************************/
console.log(job.match("front"))
console.log(job.match(/Front/gi))

/**************************** repeat ************************************/
console.log(myName.repeat(5))
console.log("*".repeat(20))
/**************************** replace ************************************/

console.log(job.replace("developer", "new"))
console.log(job.replace(/front/g, "new "))
console.log(job)
// gi
/**************************** search ************************************/
console.log(job.search(/DEV/))

/**************************** slice ******************VIMP******************/

console.log(job.slice(5, 13))

/**************************** split *********************VIMP***************/

console.log(job.split(" "))
/**************************** substr ************************************/
console.log(myName.substr(1, 3))

/**************************** substring ************************************/
console.log(myName.substring(1, 3))

/**************************** toLowerCase ************************************/

console.log(myName.toLowerCase())

/**************************** toUpperCase ************************************/

console.log(myName.toUpperCase())
/**************************** trim ************************************/

var newJob = "             Front  end         developer             ";

console.log(newJob);
console.log(newJob.trimStart());
console.log(newJob.trimEnd());
console.log(newJob.trim());
// */

var input = newJob.split(' '),
    output = '';
console.log(input);

for (let index = 0; index < input.length; index++) {
    const element = input[index];
    // if (element !== '') {
    if (element) {
        console.log(output)
        output += element + ' '
    }
}
console.log(output)

console.log(newJob.replace(/ /g, ""));


/******* Create a function that get a sentence and give you number of words that starts with capital letter  *********/
