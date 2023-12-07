const people = [
'Alice',
'Bob',
'Carly',
'Dan',
'Ed',
'Ferdinand',
'Ginny',
]

function generateSecretSantaPairs(people) {
    let jumbledList = randomizeArray(people)
    let santaList = {},
        key = '',
        value = ''

    // pair up all but last person
    for (let i = 0; i < jumbledList.length - 1; i++) {
        key = jumbledList[i]
        value = jumbledList[i + 1]
        santaList = { ...santaList, [key]: value }
    }

    // pair last on list with first on list
    key = jumbledList[jumbledList.length - 1]
    value = jumbledList[0]
    santaList = { ...santaList, [key]: value }

    return santaList
}

function randomizeArray(arr) {
    let i,
        index = 0,
        indexArr = [],
        newList = []

    // generate random array of indices
    for (i = 0; i < arr.length; i++) {
        index = Math.floor(Math.random() * arr.length)
        while (indexArr.includes(index)) {
            index = Math.floor(Math.random() * arr.length)
        }
        indexArr.push(index)
    }

    // use indices array to generate random ordered Santa List
    for (i = 0; i < arr.length; i++) {
        newList.push(arr[indexArr[i]])
    }

    return newList
}

console.log(generateSecretSantaPairs(people))