import { NavLink as RouterLink } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const NavLink = styled(RouterLink)`
    text-decoration: none;
    color: white;
    :hover {
        opacity: 0.6;
    }

    .active-class {
        border-bottom: 1%;
        color: white;
    }

    :onclick {
        border: none;
    }
`

export default NavLink
