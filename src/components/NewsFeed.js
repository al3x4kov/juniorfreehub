import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const NewsFeed = ({ news }) => {
    return (
        <div>
            {news.map((item) => (
                <Card key={item.id} sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <Link to={`/news/${item.id}`} style={{ textDecoration: 'none' }}>
                            <Typography variant="h5">{item.title}</Typography>
                        </Link>
                        <Typography variant="body2">{item.description}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default NewsFeed;
