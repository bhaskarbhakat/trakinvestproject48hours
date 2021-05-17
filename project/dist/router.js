"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../src/controllers/index.controller");
const router = express_1.Router();
router.get('/test', (req, res) => res.send('hello world'));
router.get('/users', index_controller_1.getUsers);
router.get('/users/:id', index_controller_1.getUserById);
router.post('/users', index_controller_1.createUser);
router.put('/users/:id', index_controller_1.updateUser);
router.delete('/users/:id', index_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=router.js.map