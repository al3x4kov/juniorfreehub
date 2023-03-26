import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const SideMenu = () => {
    return (
        <ButtonGroup variant="contained" orientation="vertical">
            <Button>Кнопка 1</Button>
            <Button>Кнопка 2</Button>
            <Button>Кнопка 3</Button>
        </ButtonGroup>
    );
};

export default SideMenu;
