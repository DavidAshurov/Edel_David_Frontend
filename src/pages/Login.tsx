import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    return (
        <Box sx={{ maxWidth: 350, mx: "auto", my: 9, p: 4, bgcolor: "#fff", borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h5" color="secondary" gutterBottom>Вход</Typography>
            <TextField label="E-mail" variant="outlined" fullWidth sx={{ mb: 2 }}
                       value={email} onChange={e => setEmail(e.target.value)}
            />
            <TextField label="Пароль" type="password" variant="outlined" fullWidth sx={{ mb: 3 }}
                       value={pass} onChange={e => setPass(e.target.value)}
            />
            <Button variant="contained" color="secondary" fullWidth sx={{ mb: 2 }} onClick={() => alert("Залогинен")}>
                Войти
            </Button>
            <Button color="primary" fullWidth onClick={() => navigate('/register')}>Нет аккаунта? Зарегистрируйтесь</Button>
        </Box>
    );
};

export default Login;
;