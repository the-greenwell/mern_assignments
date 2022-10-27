import React from 'react';

const ValidatorError = (props) => {
    return (
        <div class="form-text">
            {props.message}
        </div>
    )
}

export default ValidatorError