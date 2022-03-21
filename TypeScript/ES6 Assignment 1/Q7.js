//a
var array1 = [5, 12, 8, 130, 44];
var found = array1.find(function (element) { return element === array1[3]; });
console.log(found);
//b
var user1 = {
    name: "Subham",
    address: {
        city: "Bhubaneswar",
        state: "Odisha",
        pin: "751003"
    }
};
console.log(user1.address.pin);
