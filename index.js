function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,   
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords (employeeArray) {
    const newArray = []
    employeeArray.forEach(employee => {
        newArray.push(employee.createEmployeeRecord)
    })
    return newArray
}