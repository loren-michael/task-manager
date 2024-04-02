"use client";
import React, { useContext } from 'react'
import styled from 'styled-components';
import { useGlobalState } from '@/app/context/globalProvider';

function Sidebar() {
  const { theme } = useGlobalState();

  console.log(theme)

  return (
    <SidebarStyled>Sidebar</SidebarStyled>
  )
}

const SidebarStyled = styled.nav``;

export default Sidebar