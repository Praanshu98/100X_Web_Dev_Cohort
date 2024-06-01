/*
Recursion  Lecture Notes

Program for finding largers number in list
Side note: Why list and not array
    --> Array is an implementation detail, conceptually it is list.
    JS stores the location of the object in linkedlist, thats why the list can be of any length and can store any type of element/object.
*/

const largest = (list) => {
    let first = (list[0])
    let rest = list.slice(1, list.length)

    if (rest.length === 0) {
        // Means we have reached the end of the list
        return first
    }
    else {
        let  largest_number = largest(rest)
        if (first > largest_number) {
        return first
        }
        else {
            return largest_number
        }
    }
}

list = [
    1,2,3,
    10,4,5,
    11,12,6,
    7,8,9,
]

console.log(largest(list))