import React from "react";
import PropTypes from "prop-types"

export default function Button(){
    return<button>
        Button
    </button>
}

Button.propTypes = {
    variant: PropTypes.oneOf(['primary','secondary']),
    onClick: PropTypes.func
}

Button.defaultProps = {
    variant: 'primary',
    onClick : undefined
}