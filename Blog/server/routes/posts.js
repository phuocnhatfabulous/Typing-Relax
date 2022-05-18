import express from 'express';
import { getPosts, creatPosts, updatePosts } from '../controller/posts.js ';

const router = express.Router();

router.get('/', getPosts);
router.post('/', creatPosts);
router.post('/update', updatePosts);

export default router; 