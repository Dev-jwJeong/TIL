import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
    border : none;
    cursor: pointer;
    font-size : 1rem;
    border-radius: 4px;
    font-weight: bold;
    padding: 0.25rem 1rem;
    outline: none;
    color : white;
    background-color: ${palette.gray[8]};

    &:hover {
        background-color: ${palette.gray[6]};
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
`;

const Button = props => <StyledButton {...props} />

export default Button;