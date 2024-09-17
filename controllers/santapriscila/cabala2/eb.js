const { response } = require('express');
const net = require('net');
const readline = require('readline');
const { arregloTagsCabala2, arregloTagsCabala2General, arregloTagsCabala2TCP, arregloTagsCabala2Antenas } = require('../../../helpers/cabala2/arregloTagsCabala2');
const HistoryBomba = require('../../../models/HistoryBomba');


const getEbCabala2 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsCabala2()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'Cabala2': objeto });
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

const getEbCabala2Gral = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsCabala2General()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'Cabala2': objeto });
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

const getEbCabala2TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsCabala2TCP()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'Cabala2': objeto });
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

const getEbCabala2Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsCabala2Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(9)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'Cabala2': objeto });
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

const getEbCabala2Historial = async (req, res = response) => {

    try {
        const { fecha_Inicio, fecha_Fin } = req.body;
        const historial = await HistoryBomba.find({ estacion: 'CBL2', date:{ $gte: fecha_Inicio, $lte: fecha_Fin }  });

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

module.exports = {
    getEbCabala2,
    getEbCabala2Gral,
    getEbCabala2TCP,
    getEbCabala2Antenas,
    getEbCabala2Historial
}