import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NewsDetails = ({ news }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const newsItem = news.find((item) => item.id === parseInt(id));

    if (!newsItem) {
        return <Typography variant="h4">Новость не найдена</Typography>;
    }

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div>
            <Typography variant="h4">{newsItem.title}</Typography>
            <Typography variant="body1">{newsItem.description}</Typography>
            <Button onClick={handleBackClick} sx={{ marginTop: 2 }}>
                Назад
            </Button>
        </div>
    );
};

export default NewsDetails;
