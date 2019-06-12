import React, { Component } from 'react';
import styled from 'styled-components';

const StyledAdmin = styled.div`
display: flex;
color: #1A5276;
font-weight: bold;
font-size: 100px;
`

class Admin extends Component {
    render() {
        return(
            <StyledAdmin>
                Welcome Admin!
            </StyledAdmin>

            
        )
    };
};

export default Admin;
