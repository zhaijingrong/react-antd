/**
 * Created by zjr on 2018/8/24.
 */

import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const validateInput = (data) => {
    let errors = {};

    if (validator.isEmpty(data.username)) {
        errors.username = '必填';
    }

    if (validator.isEmpty(data.password)) {
        errors.username = '必填';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};

export default validateInput;