import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiTacos, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
        <NavLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </NavLink>
        <NavLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={'/cuisine/Chinese'}>
            <GiChopsticks />
            <h4>Chinese</h4>
        </NavLink>
        <NavLink to={'/cuisine/Mexican'}>
            <GiTacos />
            <h4>Mexican</h4>
        </NavLink>
    </List>
  );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;    
`

export default Category;