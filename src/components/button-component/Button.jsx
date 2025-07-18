import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const STYLES = ['btn-primary', 'btn-outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    btnColor,
    fontColor,
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    link
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to={link} className='btn-mobile'>
            <button
                style={{ backgroundColor: btnColor, color: fontColor }}
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
};