import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';


const buttonStyle = css`
    color: white;
    background: ${palette.gray[8]};
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    outline: none;
    cursor: pointer;

    &:hover {
        background: ${palette.gray[6]};
    }

    ${props => 
        props.fullWidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
    `}

    ${props => 
        props.cyan &&
        css`
            background: ${palette.cyan[5]};
            &:hover {
                background: ${palette.cyan[4]};
            }
    `}

    &:disabled {
        background: ${palette.gray[3]};
        color : ${palette.gray[5]};
        cursor: not-allowed;
    }

`;
const StyledButton = styled.button`
    ${buttonStyle}
`;

const StyledLink = styled(Link)`
    ${buttonStyle}
`;
const Button = props => {
    return props.to ? (
        <StyledLink {...props} cyan = {props.cyan ? 1 : 0} />
    ) : (
        <StyledButton {...props} />
    )
}

export default Button;