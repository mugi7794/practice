import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
    label: string;
    size: 'small' | 'large'; // Remove undefined as a valid value for size prop
    onClick?: () => void;
}

export default function Button({label, size, ...props}:ButtonProps) {
    return (
        <Styled.Button size={size}>
            <div className="button" role="button" {...props}>
                {label}
            </div>
        </Styled.Button>
    )
}

const Styled = {
    Button:styled.div<{size: 'small'|'large'}>`
        display: flex; 
        justify-content: center;
        align-items: center;
        width: ${({ size }) => (size === 'small' ? '48px' : '76px')};
        border-bottom: 1px solid #FFFFFF;
        .button{
            padding-top: 11px;
            padding-bottom: 11px;
            cursor: pointer;
            color: #FFFFFF;
            text-align: center;
            font-family: JejuMyeongjo;
            font-size: 14px;
        }
    `,
}