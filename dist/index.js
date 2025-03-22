"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb+srv://nikhilksrivastav190:xcrZqPZcWcGBKU1U@cluster0.e6uvw.mongodb.net/brainly");
const JWT_PASSWORD = "lol1234455675676";
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.body.username;
        const password = req.body.password;
        yield db_1.UserModel.create({
            username: username,
            password: password
        });
        res.json("usert signed up");
    }
    catch (e) {
        res.status(400).json({
            message: "user laready exist"
        });
    }
}));
app.post("/api/v1/sigin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = yield db_1.UserModel.findOne({
        username,
        password
    });
    if (existingUser) {
        const token = jsonwebtoken_1.default.sign({
            id: existingUser._id
        }, JWT_PASSWORD);
        res.json({
            token
        });
    }
    res.json("hello world ");
}));
app.get("/api/v1/signup", (req, res) => {
    res.json("hello world ");
});
app.get("/api/v1/signup", (req, res) => {
    res.json("hello world ");
});
app.get("/api/v1/signup", (req, res) => {
    res.json("hello world ");
});
app.get("/api/v1/signup", (req, res) => {
    res.json("hello world ");
});
app.get("/api/v1/brain/share", (req, res) => {
    res.json("hello world ");
});
app.get("/api/v1/brain/:shareLink", (req, res) => {
    res.json("hello world ");
});
app.listen(3000);
