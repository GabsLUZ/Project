import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { Home, Login, Cadastro } from "../pageComponents/index";

export default function Index() {
    return (
        <Routes>
                <Route index element={<Login />} />
                <Route path="Home" element={<Home />} />
                <Route path="Cadastro" element={<Cadastro />} />
        </Routes>
    );
}