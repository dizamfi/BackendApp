const { Router } = require('express');
const router = Router();
const { getEbPrecSantaMonica, getEbSanDiego, getEbSanFranscisco, getEbSantaBarbara, getEbSantaMonicaA, getEbSantaRosaA, getEbSantaRosaB, getEbPrecSantaMonicaGral, getEbPrecSantaMonicaTCP, getEbSanDiegoGral, getEbSanDiegoTCP, getEbSanFransciscoGral, getEbSanFransciscoTCP, getEbSantaBarbaraGral, getEbSantaBarbaraTCP, getEbSantaMonicaAGral, getEbSantaMonicaATCP, getEbSantaRosaAGral, getEbSantaRosaATCP,  getEbSantaRosaBGral, getEbSantaRosaBTCP, getEbPrecSantaMonicaHistorial, getEbSanDiegoHistorial, getEbSanFransciscoHistorial, getEbSantaBarbaraHistorial, getEbSantaMonicaAHistorial, getEbSantaRosaAHistorial, getEbSantaRosaBHistorial, getEbPrecSantaMonicaAntenas, getEbSanDiegoAntenas, getEbSanFransciscoAntenas, getEbSantaBarbaraAntenas, getEbSantaMonicaAAntenas, getEbSantaRosaAAntenas, getEbSantaRosaBAntenas, getEbEstadoBombasCalifornia } = require('../../../controllers/santapriscila/california/eb');
const { arregloTagsEstadoBombasCalifornia } = require('../../../helpers/arregloTagsCalifornia');


router.get('/psm', getEbPrecSantaMonica);
router.get('/psm/Gral', getEbPrecSantaMonicaGral);
router.get('/psm/tcp', getEbPrecSantaMonicaTCP);
router.get('/psm/antenas', getEbPrecSantaMonicaAntenas);
router.post('/psm/historial', getEbPrecSantaMonicaHistorial);

router.get('/sd', getEbSanDiego);
router.get('/sd/Gral', getEbSanDiegoGral);
router.get('/sd/tcp', getEbSanDiegoTCP);
router.get('/sd/antenas', getEbSanDiegoAntenas);
router.post('/sd/historial', getEbSanDiegoHistorial);

router.get('/sf', getEbSanFranscisco);
router.get('/sf/Gral', getEbSanFransciscoGral);
router.get('/sf/tcp', getEbSanFransciscoTCP);
router.get('/sf/antenas', getEbSanFransciscoAntenas);
router.post('/sf/historial', getEbSanFransciscoHistorial);

router.get('/sb', getEbSantaBarbara);
router.get('/sb/Gral', getEbSantaBarbaraGral);
router.get('/sb/tcp', getEbSantaBarbaraTCP);
router.get('/sb/antenas', getEbSantaBarbaraAntenas);
router.post('/sb/historial', getEbSantaBarbaraHistorial);

router.get('/sma', getEbSantaMonicaA);
router.get('/sma/Gral', getEbSantaMonicaAGral);
router.get('/sma/tcp', getEbSantaMonicaATCP);
router.get('/sma/antenas', getEbSantaMonicaAAntenas);
router.post('/sma/historial', getEbSantaMonicaAHistorial);

router.get('/sra', getEbSantaRosaA);
router.get('/sra/Gral', getEbSantaRosaAGral);
router.get('/sra/tcp', getEbSantaRosaATCP);
router.get('/sra/antenas', getEbSantaRosaAAntenas);
router.post('/sra/historial', getEbSantaRosaAHistorial);

router.get('/srb', getEbSantaRosaB);
router.get('/srb/Gral', getEbSantaRosaBGral);
router.get('/srb/tcp', getEbSantaRosaBTCP);
router.get('/srb/antenas', getEbSantaRosaBAntenas);
router.post('/srb/historial', getEbSantaRosaBHistorial);

router.get('/bombas', getEbEstadoBombasCalifornia);

module.exports = router;