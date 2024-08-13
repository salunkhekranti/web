import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Container,
    Box,
    Alert,
    Snackbar,
} from '@mui/material';

const LeadGenerationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setAlertMessage('Your information has been submitted successfully!');
        setAlertOpen(true);
        // Reset form fields
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    const handleClose = () => {
        setAlertOpen(false);
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Lead Generation Form
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </form>
                <Snackbar
                    open={alertOpen}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity="success">
                        {alertMessage}
                    </Alert>
                </Snackbar>
            </Box>
        </Container>
    );
};

export default LeadGenerationForm;
