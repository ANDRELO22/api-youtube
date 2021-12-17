import  Router  from 'express';
const router = Router ();

import * as videoctr1  from './videos.controller'

router.get('/videos', videoctr1.getVideos );

router.get('/video/:id', videoctr1.getVideo );

router.post('/videos', videoctr1.createVideos);

router.delete('/videos/:id', videoctr1.deleteVideos);

router.put('/videos/:id', videoctr1.updateVideos);

export default router