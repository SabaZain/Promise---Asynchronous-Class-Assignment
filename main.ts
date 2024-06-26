// Promise Assignment
//1. Typescript function fetchGreeting that returns a greeting message after 2 second delay using setTimeout.
function fetchGreeting () {
    return setTimeout(() => {
        console.log("Hello Students, Welcome to Typescript Class at Governor house.");
    }, 2000);
}
fetchGreeting();

//2. Function simulateTask that simulates a task by logging "Task Started", waits for 1 second and then logs "Task Completed" using setTimeout.
function simulateTask (){
    console.log("Task Started");
    setTimeout(() => {
        console.log("Task Completed");
    }, 1000);
}
simulateTask();

//3. Function fetchData that returns a promise which resolves with the string "Data fetched successfully!" after delay of 1 second.
let fetchData = (): Promise<string> => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    })
}
fetchData().then((message) => {
    console.log(message);
    console.log("Promise Consumed")
})

//4. Function fetchWithError that returns a promise. It should return with "Data fetched successfully!" or reject with "Data fetch failed!" after delay of 1 second.Handle the rejection using .catch
function fetchWithError(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let success = Math.random() > 1;
            if(success){
                resolve("Data fetched successfully!");
            } else {
                reject("Data fetch failed!");
            }
            }, 1000);
        });
}

fetchWithError()
.then(message => {
    console.log(message);
})
.catch(error => {
    console.log(error);
});

//4. Function executeSequentially that executes two functions fetchData and processData sequentially using Promises and 
// logs the result in the order they are called

function fetchedData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("fetchData called");
            resolve("Data fetched");
        }, 1000)
    });
}
function processData(Data:any){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("processData called:", Data);
            resolve("Data processed");
        }, 1000)
    });
}
function executeSequentially(){
    fetchedData()
    .then(Data => {
        return processData(Data);
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("Error:", error);
    });
}
executeSequentially();



