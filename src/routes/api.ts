import { Router } from 'express';
import multer from 'multer';

import * as TodoController from '../controllers/todo.controller';
import * as uploadController from '../controllers/upload.controller'; 
 

const router = Router(); // Mover para cima

const upload = multer({
    dest: './tmp',
    fileFilter: (req, file, cb) => {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];
        cb(null, allowed.includes(file.mimetype));
    },
    limits: { fileSize: 20000000 } 
});

router.get('/todo', TodoController.all);
router.post('/todo', TodoController.add);
router.put('/todo/:id', TodoController.update);
router.delete('/todo/:id', TodoController.remove);

router.post('/upload', upload.single('avatar'), uploadController.uploadFile);




export default router;
