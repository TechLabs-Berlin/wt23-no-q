const validation = (queue) => {
    let errors = {};

    if (!queue.name) {
        errors.name = "name is required"
    }
    if (!queue.gender) {
        errors.gender = "gender is required"
    }
    if (!queue.number) {
        errors.message = "number of people is required and the maximum input is 30"
    }
    if (queue.drink = "") {
        errors.message = "You have to choose your favorite drink"
    }
    return errors;


};
export default validation;