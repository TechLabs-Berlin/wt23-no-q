const validation = (values) => {
    let errors = {};

    if (!values.name) {
        errors.name = "name is required"
    }
    if (!values.gender) {
        errors.gender = "gender is required"
    }
    if (!values.number) {
        errors.number = "number of people is required and the maximum input is 30"
    }
    if (!values.drink) {
        errors.drink = "You have to choose your favorite drink"
    }
    return errors;


};
export default validation;