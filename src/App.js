import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthenticationButton from './components/AuthenticationButton';
import NewsFeed from './components/NewsFeed';
import NewsDetails from './components/NewsDetails';
import SideMenu from './components/SideMenu';
import CreateNews from './components/CreateNews';
import {
  Container,
  Button,
  Grid,
  Box,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';

const news = [
  {
    id: 1,
    title: 'Новость 1',
    description:
        'Описание новости 1. Здесь вы найдете подробную информацию о новости 1.',
  },
  {
    id: 2,
    title: 'Новость 2',
    description:
        'Описание новости 2. Здесь вы найдете подробную информацию о новости 2.',
  },
  {
    id: 3,
    title: 'Новость 3',
    description:
        'Описание новости 3. Здесь вы найдете подробную информацию о новости 3.',
  },
];

function App() {
  const [creatingNews, setCreatingNews] = useState(false);

  const handleCreateNewsClick = () => {
    setCreatingNews(true);
  };

  const handleCancelCreateNews = () => {
    setCreatingNews(false);
  };

  return (
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                React Twitter
              </Typography>
              <AuthenticationButton />
            </Toolbar>
          </AppBar>
          <Container>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={12} md={8}>
                <Routes>
                  <Route
                      path="/"
                      element={
                        creatingNews ? (
                            <CreateNews onCancel={handleCancelCreateNews} />
                        ) : (
                            <NewsFeed news={news} />
                        )
                      }
                  />
                  <Route
                      path="/news/:id"
                      element={<NewsDetails news={news} />}
                  />
                </Routes>
              </Grid>
              <Grid item xs={12} md={4}>
                <SideMenu />
              </Grid>
            </Grid>
            {!creatingNews && (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCreateNewsClick}
                    sx={{ marginBottom: 2, marginTop: 2 }}
                >
                  Создать новость
                </Button>
            )}
          </Container>
        </Box>
      </Router>
  );
}

export default App;
