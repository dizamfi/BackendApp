const { Router } = require('express');
const { getEb1B, getEbApendice, getEbCamarpasa, getEbDePesca, getEb1BGral, getEbApendiceGral, getEbCamarpasaGral, getEbDePescaGral, getEb1BTCP, getEbApendiceTCP, getEbCamarpasaTCP, getEbDePescaTCP, getEbCamarpasaAntenas, getEb1BAntenas, getEbApendiceAntenas, getEbDePescaAntenas, getEb1BHistorial, getEbApendiceHistorial, getEbCamarpasaHistorial, getEbDePescaHistorial, getEbEstadoBombasChanduy, getEbPanamao, getEbPanamaoGral, getEbPanamaoTCP, getEbPanamaoAntenas, getEbPanamaoHistorial } = require('../../../controllers/santapriscila/chanduy/eb');
const { validarCampos } = require('../../../middlewares/validar-campos');
const router = Router();

router.get('/1b', getEb1B);
router.get('/1b/Gral', getEb1BGral);
router.get('/1b/tcp', getEb1BTCP);
router.get('/1b/antenas', getEb1BAntenas);
router.post('/1b/historial', getEb1BHistorial);

router.get('/apn', getEbApendice);
router.get('/apn/Gral', getEbApendiceGral);
router.get('/apn/tcp', getEbApendiceTCP);
router.get('/apn/antenas', getEbApendiceAntenas);
router.post('/apn/historial', getEbApendiceHistorial);

router.get('/cmp', getEbCamarpasa);
router.get('/cmp/Gral', getEbCamarpasaGral);
router.get('/cmp/tcp', getEbCamarpasaTCP);
router.get('/cmp/antenas', getEbCamarpasaAntenas);
router.post('/cmp/historial', getEbCamarpasaHistorial);

router.get('/dp', getEbDePesca);
router.get('/dp/Gral', getEbDePescaGral);
router.get('/dp/tcp', getEbDePescaTCP);
router.get('/dp/antenas', getEbDePescaAntenas);
router.post('/dp/historial', getEbDePescaHistorial);

router.get('/pnm', getEbPanamao);
router.get('/pnm/Gral', getEbPanamaoGral);
router.get('/pnm/tcp', getEbPanamaoTCP);
router.get('/pnm/antenas', getEbPanamaoAntenas);
router.post('/pnm/historial', getEbPanamaoHistorial);

router.get('/bombas', getEbEstadoBombasChanduy);


module.exports = router;