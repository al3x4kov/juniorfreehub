import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button, TextField, Box } from '@mui/material';


const CreateNews = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const quillRef = useRef(null);

    useEffect(() => {
        if (quillRef.current) {
            const quill = quillRef.current.getEditor();
            quill.getModule('toolbar').addHandler('image', handleImageUpload);
        }
    }, []);


    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeContent = (value) => {
        setContent(value);
    };

    const handleSubmit = () => {
        console.log({ title, content });
    };

    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*,video/*');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            // Загрузка файла на сервер и получение URL для вставки
            const imageURL = await uploadToS3(file);
            const quill = quillRef.current.getEditor();
            const range = quill.getSelection();
            const position = range ? range.index : 0;
            quill.insertEmbed(position, 'image', imageURL, 'user');
        };
    };


    const uploadToS3 = async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        // Замените YOUR_SERVER_API_ENDPOINT на адрес вашего сервера
        const response = await fetch('http://localhost:8081/upload-image', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Загрузка прошла успешно')
            // Предполагается, что сервер возвращает JSON с полем 'url', содержащим URL изображения
            return data.url;
        } else {
            throw new Error('Ошибка при загрузке файла');
        }
    };


    const modules = {
        toolbar: {
            container: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
                ['link', 'image', 'code-block'],
                ['clean'],
            ],
        },
    };

    return (
        <Box>
            <TextField
                label="Тема новости"
                value={title}
                onChange={handleChangeTitle}
                fullWidth
                sx={{ marginBottom: 2 }}
            />
            <ReactQuill
                ref={quillRef}
                value={content}
                onChange={handleChangeContent}
                modules={modules}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{ marginTop: 2 }}
            >
                Создать новость
            </Button>
        </Box>
    );
};

export default CreateNews;