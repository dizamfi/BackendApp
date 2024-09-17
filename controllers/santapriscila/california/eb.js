const { response } = require('express');
const net = require('net');
const readline = require('readline');
const HistoryBomba = require('../../../models/HistoryBomba');
const { arregloTagsPrecSantaMonica, arregloTagsSanDiego, arregloTagsSanFranscisco, arregloTagsSantaBarbara, arregloTagsSantaMonicaA, arregloTagsSantaRosaA, arregloTagsSantaRosaB, arregloTagsPrecSantaMonicaGeneral, arregloTagsPrecSantaMonicaTCP, arregloTagsSanDiegoGeneral, arregloTagsSanDiegoTCP, arregloTagsSanFransciscoGeneral, arregloTagsSanFransciscoTCP, arregloTagsSantaBarbaraGeneral, arregloTagsSantaBarbaraTCP, arregloTagsSantaMonicaAGeneral, arregloTagsSantaMonicaATCP, arregloTagsSantaRosaAGeneral, arregloTagsSantaRosaATCP, arregloTagsSantaRosaBGeneral, arregloTagsSantaRosaBTCP, arregloTagsPrecSantaMonicaAntenas, arregloTagsSanDiegoAntenas, arregloTagsSanFransciscoAntenas, arregloTagsSantaBarbaraAntenas, arregloTagsSantaMonicaAAntenas, arregloTagsSantaRosaAAntenas, arregloTagsSantaRosaBAntenas, arregloTagsEstadoBombasCalifornia } = require('../../../helpers/arregloTagsCalifornia');

const getEbPrecSantaMonica = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPrecSantaMonica()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(4)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PSM': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbPrecSantaMonicaGral = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPrecSantaMonicaGeneral()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(4)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PSM': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbPrecSantaMonicaTCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPrecSantaMonicaTCP()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(4)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PSM': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbPrecSantaMonicaAntenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPrecSantaMonicaAntenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(4)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PSM': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbPrecSantaMonicaHistorial = async (req, res = response) => {
    try {
        const { fecha_Inicio, fecha_Fin } = req.body;
        const historial = await HistoryBomba.find({ estacion: 'PSM', date:{ $gte: fecha_Inicio, $lte: fecha_Fin }  });
        

        if (historial.length == 0) {
            return res.status(400).json({ 
                ok: false,
                message: 'No hay rigistros para esta estacion de bombeo'
            });
        }
        res.status(200).json(historial); 
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
};

const getEbSanDiego = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSanDiego()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(3)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SD': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSanDiegoGral = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSanDiegoGeneral()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(3)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SD': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSanDiegoTCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSanDiegoTCP()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(3)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SD': objeto });
                        
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSanDiegoAntenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSanDiegoAntenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(3)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SD': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSanDiegoHistorial = async (req, res = response) => {
    try {
        const { fecha_Inicio, fecha_Fin } = req.body;
        const historial = await HistoryBomba.find({ estacion: 'SD', date:{ $gte: fecha_Inicio, $lte: fecha_Fin }  });

        if (historial.length == 0) {
            return res.status(400).json({ 
                ok: false,
                message: 'No hay rigistros para esta estacion de bombeo'
            });
        }
        res.status(200).json(historial); 
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
};

const getEbSanFranscisco = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSanFranscisco()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(3)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SF': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSanFransciscoGral = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSanFransciscoGeneral()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(3)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SF': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSanFransciscoTCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSanFransciscoTCP()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(3)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SF': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSanFransciscoAntenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSanFransciscoAntenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(3)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SF': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSanFransciscoHistorial = async (req, res = response) => {
    try {
        const { fecha_Inicio, fecha_Fin } = req.body;
        const historial = await HistoryBomba.find({ estacion: 'SF', date:{ $gte: fecha_Inicio, $lte: fecha_Fin }  });

        if (historial.length == 0) {
            return res.status(400).json({ 
                ok: false,
                message: 'No hay rigistros para esta estacion de bombeo'
            });
        }
        res.status(200).json(historial); 
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
};

const getEbSantaBarbara = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaBarbara()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(3)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SB': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaBarbaraGral = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaBarbaraGeneral()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(3)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SB': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaBarbaraTCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaBarbaraTCP()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(3)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SB': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaBarbaraAntenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaBarbaraAntenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(3)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SB': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaBarbaraHistorial = async (req, res = response) => {
    try {
        const { fecha_Inicio, fecha_Fin } = req.body;
        const historial = await HistoryBomba.find({ estacion: 'SB', date:{ $gte: fecha_Inicio, $lte: fecha_Fin }  });

        if (historial.length == 0) {
            return res.status(400).json({ 
                ok: false,
                message: 'No hay rigistros para esta estacion de bombeo'
            });
        }
        res.status(200).json(historial); 
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
};

const getEbSantaMonicaA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaMonicaA()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(4)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SMA': objeto });
                        //console.log(objeto)
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaMonicaAGral = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaMonicaAGeneral()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(4)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SMA': objeto });
                        //console.log(objeto)
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaMonicaATCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaMonicaATCP()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(4)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SMA': objeto });
                        //console.log(objeto)
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaMonicaAAntenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaMonicaAAntenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(4)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SMA': objeto });
                        //console.log(objeto)
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaMonicaAHistorial = async (req, res = response) => {
    try {
        const { fecha_Inicio, fecha_Fin } = req.body;
        const historial = await HistoryBomba.find({ estacion: 'SMA', date:{ $gte: fecha_Inicio, $lte: fecha_Fin }  });

        if (historial.length == 0) {
            return res.status(400).json({ 
                ok: false,
                message: 'No hay rigistros para esta estacion de bombeo'
            });
        }
        res.status(200).json(historial); 
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
};

const getEbSantaRosaA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaRosaA()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(4)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SRA': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaRosaAGral = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaRosaAGeneral()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(4)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SRA': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaRosaATCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaRosaATCP()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(4)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SRA': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaRosaAAntenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaRosaAAntenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(4)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SRA': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaRosaAHistorial = async (req, res = response) => {
    try {
        const { fecha_Inicio, fecha_Fin } = req.body;
        const historial = await HistoryBomba.find({ estacion: 'SRA', date:{ $gte: fecha_Inicio, $lte: fecha_Fin }  });

        if (historial.length == 0) {
            return res.status(400).json({ 
                ok: false,
                message: 'No hay rigistros para esta estacion de bombeo'
            });
        }
        res.status(200).json(historial); 
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
};

const getEbSantaRosaB = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaRosaB()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(15)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SRB': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaRosaBGral = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaRosaBGeneral()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(5)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SRB': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaRosaBTCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaRosaBTCP()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(11)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SRB': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaRosaBAntenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsSantaRosaBAntenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(8)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'SRB': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEbSantaRosaBHistorial = async (req, res = response) => {
    try {
        const { fecha_Inicio, fecha_Fin } = req.body;
        const historial = await HistoryBomba.find({ estacion: 'SRB', date:{ $gte: fecha_Inicio, $lte: fecha_Fin }  });

        if (historial.length == 0) {
            return res.status(400).json({ 
                ok: false,
                message: 'No hay rigistros para esta estacion de bombeo'
            });
        }
        res.status(200).json(historial); 
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error en el servidor'
        });
    }
};

const getEbEstadoBombasCalifornia = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsEstadoBombasCalifornia()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'Bombas': objeto });
                    }
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
    getEbPrecSantaMonica,
    getEbSanDiego,
    getEbSanFranscisco,
    getEbSantaBarbara,
    getEbSantaMonicaA,
    getEbSantaRosaA,
    getEbSantaRosaB,
    getEbPrecSantaMonicaGral,
    getEbPrecSantaMonicaTCP,
    getEbSanDiegoGral,
    getEbSanDiegoTCP,
    getEbSanFransciscoGral,
    getEbSanFransciscoTCP,
    getEbSantaBarbaraGral,
    getEbSantaBarbaraTCP,
    getEbSantaMonicaAGral,
    getEbSantaMonicaATCP,
    getEbSantaRosaAGral,
    getEbSantaRosaATCP,
    getEbSantaRosaBGral,
    getEbSantaRosaBTCP,
    getEbPrecSantaMonicaHistorial,
    getEbSanDiegoHistorial,
    getEbSanFransciscoHistorial,
    getEbSantaBarbaraHistorial,
    getEbSantaMonicaAHistorial,
    getEbSantaRosaAHistorial,
    getEbSantaRosaBHistorial,
    getEbPrecSantaMonicaAntenas,
    getEbSanDiegoAntenas,
    getEbSanFransciscoAntenas,
    getEbSantaBarbaraAntenas,
    getEbSantaMonicaAAntenas,
    getEbSantaRosaAAntenas,
    getEbSantaRosaBAntenas,
    getEbEstadoBombasCalifornia
}