export function loginValidate(values) {
    const errors = {};

    if (!values.username) {
        errors.username = "Username is required";
    } else if (values.username.trim().includes(" ")) {
        errors.username = "Invalid username";
    }
    if (!values.password) {
        errors.password = "Password is required";
    }

    return errors;
}

export function registerValidate(values) {
    const errors = {};

    if (!values.username) {
        errors.username = "Username is required";
    } else if (values.username.trim().includes(" ")) {
        errors.username = "Invalid username";
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&_-]{8,}$/.test(values.password)) {
        errors.password = "Password is weak, Check password rules";
    }

    if (!values.cpassword) {
        errors.cpassword = "Confirm Password is required";
    } else if (values.password !== values.cpassword) {
        errors.cpassword = "Confirm Password Not Matched";
    }

    return errors;
}



