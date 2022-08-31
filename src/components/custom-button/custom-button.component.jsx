import React from "react";

import './custom-button.styles.scss'

const CustomButton = ( { children, ...otherSectionProps }) => (
    <button className="custom-button" {...otherSectionProps}>
        {children}
    </button>
);

export default CustomButton;