const { response } = require('express');
const net = require('net');
const readline = require('readline');
const { generarTags, generarTagsTA, generarTagsTCP, arregloTagsPC01Antenas, arregloTagsPC02Antenas, arregloTagsPC03Antenas, arregloTagsPC04Antenas, arregloTagsPC05Antenas, arregloTagsPC06Antenas, arregloTagsPC07Antenas, arregloTagsPC08Antenas, arregloTagsPC09Antenas, arregloTagsPC10Antenas, arregloTagsPC11Antenas, arregloTagsPC12Antenas, arregloTagsPC13Antenas, arregloTagsPC14Antenas, arregloTagsPC15Antenas, arregloTagsPC16Antenas, arregloTagsPC17Antenas, arregloTagsPC18Antenas, arregloTagsPS01Antenas, arregloTagsPS02Antenas, arregloTagsPS03Antenas, arregloTagsPS04Antenas, arregloTagsPS05Antenas, arregloTagsPS06Antenas, arregloTagsPS07Antenas, arregloTagsPS08Antenas, arregloTagsPS09Antenas, arregloTagsPS10Antenas, arregloTagsPS11Antenas, arregloTagsPS12Antenas, arregloTagsPS13Antenas, arregloTagsPS14Antenas, arregloTagsPS15Antenas, arregloTagsPS16Antenas, arregloTagsPS17Antenas, arregloTagsPS18Antenas, arregloTagsPS19Antenas, arregloTagsPS20Antenas, arregloTagsAntenasSectoriales, arregloTagsPiscinasGeneral } = require('../../../helpers/california/arregloTagsAireacion');

const getPC01 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_01'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC01': objeto });
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

const getPC01TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_01_TA_01', 'PC_01_TA_02'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC01_TA': objeto });
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

const getPC01Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC01Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC01': objeto });
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

const getPC02 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_02'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC02': objeto });
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

const getPC02Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC02Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC02': objeto });
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

const getPC02TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_02_TA_02'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC02_TA': objeto });
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

const getPC02TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PC_02_TA_01'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC02_TCP': objeto });
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

const getPC03 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC03': objeto });
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

const getPC03Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC03Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC03': objeto });
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

const getPC03TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_03_TA_01','PC_03_TA_02'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC03_TA': objeto });
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

const getPC03TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PC_03_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC03_TCP': objeto });
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

const getPC04 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_04'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC04': objeto });
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

const getPC04Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC04Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC04': objeto });
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

const getPC04TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PC_04_TA_01'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC04_TCP': objeto });
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

const getPC04TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_04_TA_02','PC_04_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC04_TA': objeto });
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

const getPC05 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_05'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC05': objeto });
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

const getPC05Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC05Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC05': objeto });
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

const getPC05TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_05_TA_01','PC_05_TA_02'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC05_TA': objeto });
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

const getPC05TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PC_05_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC05_TCP': objeto });
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

const getPC06 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_06'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC06': objeto });
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

const getPC06Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC06Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC06': objeto });
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

const getPC06TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_06_TA_02','PC_06_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC06_TA': objeto });
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

const getPC06TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PC_06_TA_01'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC06_TCP': objeto });
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

const getPC07 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_07'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC07': objeto });
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

const getPC07Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC07Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC07': objeto });
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

const getPC07TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_07_TA_01','PC_07_TA_02'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC07_TA': objeto });
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

const getPC07TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PC_07_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC07_TCP': objeto });
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

const getPC08 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_08'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC08': objeto });
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

const getPC08Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC08Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC08': objeto });
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

const getPC08TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_08_TA_02','PC_08_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC08_TA': objeto });
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

const getPC08TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PC_08_TA_01'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC08_TCP': objeto });
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

const getPC09 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_09'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC09': objeto });
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

const getPC09Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC09Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC09': objeto });
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

const getPC09TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_09_TA_01','PC_09_TA_02'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC09_TA': objeto });
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

const getPC09TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PC_09_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC09_TCP': objeto });
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

const getPC10 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_10'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC10': objeto });
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

const getPC10Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC10Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC10': objeto });
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

const getPC10TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_10_TA_02'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC10_TA': objeto });
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

const getPC10TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PC_10_TA_01','PC_10_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC10_TCP': objeto });
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

const getPC11 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_11'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC11': objeto });
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

const getPC11Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC11Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC11': objeto });
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

const getPC11TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_11_TA_01','PC_11_TA_02','PC_11_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC11_TA': objeto });
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

const getPC12 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_12'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC12': objeto });
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

const getPC12Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC12Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC12': objeto });
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

const getPC12TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_12_TA_01','PC_12_TA_02'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC12_TA': objeto });
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

const getPC12TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PC_12_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC12_TCP': objeto });
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

const getPC13 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_13'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC13': objeto });
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

const getPC13Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC13Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC13': objeto });
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

const getPC13TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_13_TA_02','PC_13_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC13_TA': objeto });
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

const getPC13TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PC_13_TA_01'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC13_TCP': objeto });
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

const getPC14 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_14'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC14': objeto });
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

const getPC14Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC14Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC14': objeto });
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

const getPC14TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_14_TA_02','PC_14_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC14_TA': objeto });
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

const getPC14TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PC_14_TA_01'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC14_TCP': objeto });
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

const getPC15 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_15'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC15': objeto });
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

const getPC15Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC15Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC15': objeto });
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

const getPC15TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_15_TA_01','PC_15_TA_02','PC_15_TA_04'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC15_TA': objeto });
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

const getPC15TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PC_15_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC15_TCP': objeto });
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

const getPC16 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_16'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC16': objeto });
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

const getPC16Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC16Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC16': objeto });
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

const getPC16TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_16_TA_01','PC_16_TA_02','PC_16_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC16_TA': objeto });
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

const getPC17 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_17'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC17': objeto });
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

const getPC17Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC17Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC17': objeto });
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

const getPC17TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_17_TA_02'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC17_TA': objeto });
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

const getPC17TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PC_17_TA_01','PC_17_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC17_TCP': objeto });
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

const getPC18 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PC_18'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC18': objeto });
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

const getPC18Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPC18Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'PC18': objeto });
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

const getPC18TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PC_18_TA_01','PC_18_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC18_TA': objeto });
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

const getPC18TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PC_18_TA_02'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PC18_TCP': objeto });
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

const getPISO1 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_01'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS01': objeto });
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

const getPISO1Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS01Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS01': objeto });
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

const getPISO1TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_01_TA_01','PIS_01_TA_03','PIS_01_TA_05','PIS_01_TA_07'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS01_TA': objeto });
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

const getPIS01TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_01_TA_02','PIS_01_TA_04','PIS_01_TA_06','PIS_01_TA_08'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS01_TCP': objeto });
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

const getPISO2 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_02'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS02': objeto });
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

const getPISO2Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS02Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS02': objeto });
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

const getPISO2TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_02_TA_01','PIS_02_TA_03','PIS_02_TA_05','PIS_02_TA_07'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS02_TA': objeto });
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

const getPIS02TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_02_TA_02','PIS_02_TA_04','PIS_02_TA_06'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS02_TCP': objeto });
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

const getPISO3 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS03': objeto });
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

const getPISO3Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS03Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS03': objeto });
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

const getPISO3TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_03_TA_01','PIS_03_TA_02','PIS_03_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS03_TA': objeto });
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

const getPIS03TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_03_TA_04','PIS_03_TA_05'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS03_TCP': objeto });
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

const getPISO4 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_04'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS04': objeto });
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

const getPISO4Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS04Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS04': objeto });
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

const getPISO4TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_04_TA_03','PIS_04_TA_04'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS04_TA': objeto });
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

const getPIS04TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_04_TA_01','PIS_04_TA_02'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS04_TCP': objeto });
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

const getPISO5 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_05'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS05': objeto });
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

const getPISO5Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS05Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS05': objeto });
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

const getPISO5TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_05_TA_01','PIS_05_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS05_TA': objeto });
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

const getPIS05TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_05_TA_02','PIS_05_TA_04'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS05_TCP': objeto });
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

const getPISO6 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_06'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS06': objeto });
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

const getPISO6Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS06Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS06': objeto });
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

const getPISO6TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_06_TA_03','PIS_06_TA_04'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS06_TA': objeto });
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

const getPIS06TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_06_TA_01','PIS_06_TA_02'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS06_TCP': objeto });
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

const getPISO7 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_07'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS07': objeto });
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

const getPISO7Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS07Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS07': objeto });
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

const getPISO7TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_07_TA_01','PIS_07_TA_03','PIS_07_TA_06'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS07_TA': objeto });
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

const getPIS07TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_07_TA_02','PIS_07_TA_04','PIS_07_TA_05'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS07_TCP': objeto });
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

const getPISO8 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_08'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS08': objeto });
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

const getPISO8Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS08Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS08': objeto });
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

const getPISO8TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_08_TA_02','PIS_08_TA_04','PIS_08_TA_05'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS08_TA': objeto });
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

const getPIS08TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_08_TA_01','PIS_08_TA_03','PIS_08_TA_06'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS08_TCP': objeto });
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

const getPISO9 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_09'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS09': objeto });
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

const getPISO9Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS09Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS09': objeto });
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

const getPISO9TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_09_TA_01','PIS_09_TA_07'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS09_TA': objeto });
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

const getPIS09TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_09_TA_02','PIS_09_TA_03','PIS_09_TA_04','PIS_09_TA_05','PIS_09_TA_06','PIS_09_TA_08'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS09_TCP': objeto });
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

const getPIS10 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_10'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS10': objeto });
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

const getPIS10Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS10Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS10': objeto });
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

const getPIS10TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_10_TA_01','PIS_10_TA_02','PIS_10_TA_03','PIS_10_TA_04'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS10_TA': objeto });
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

const getPIS11 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_11'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS11': objeto });
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

const getPIS11Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS11Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS11': objeto });
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

const getPIS11TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_11_TA_01','PIS_11_TA_03','PIS_11_TA_04','PIS_11_TA_06'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS11_TA': objeto });
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

const getPIS11TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_11_TA_02','PIS_11_TA_05','PIS_11_TA_07'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS11_TCP': objeto });
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

const getPIS12 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_12'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS12': objeto });
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

const getPIS12Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS12Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS12': objeto });
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

const getPIS12TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_12_TA_01','PIS_12_TA_03','PIS_12_TA_05'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS12_TA': objeto });
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

const getPIS12TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_12_TA_02','PIS_12_TA_04','PIS_12_TA_06'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS12_TCP': objeto });
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

const getPIS13 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_13'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS13': objeto });
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

const getPIS13Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS13Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS13': objeto });
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

const getPIS13TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_13_TA_01','PIS_13_TA_02','PIS_13_TA_04','PIS_13_TA_05','PIS_13_TA_08'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS13_TA': objeto });
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

const getPIS13TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_13_TA_03','PIS_13_TA_06','PIS_13_TA_07'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS13_TCP': objeto });
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

const getPIS14 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_14'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS14': objeto });
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

const getPIS14Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS14Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS14': objeto });
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

const getPIS14TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_14_TA_01','PIS_14_TA_04','PIS_14_TA_07'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS14_TA': objeto });
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

const getPIS14TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_14_TA_02','PIS_14_TA_03','PIS_14_TA_05','PIS_14_TA_06'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS14_TCP': objeto });
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

const getPIS15 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_15'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS15': objeto });
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

const getPIS15Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS15Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS15': objeto });
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

const getPIS15TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_15_TA_02','PIS_15_TA_05','PIS_15_TA_07'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS15_TA': objeto });
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

const getPIS15TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_15_TA_01','PIS_15_TA_03','PIS_15_TA_04','PIS_15_TA_06'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS15_TCP': objeto });
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

const getPIS16 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_16'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS16': objeto });
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

const getPIS16Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS16Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS16': objeto });
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

const getPIS16TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_16_TA_01','PIS_16_TA_02','PIS_16_TA_04','PIS_16_TA_05'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS16_TA': objeto });
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

const getPIS16TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_16_TA_03','PIS_16_TA_06'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS16_TCP': objeto });
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

const getPIS17 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_17'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS17': objeto });
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

const getPIS17Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS17Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS17': objeto });
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

const getPIS17TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_17_TA_01','PIS_17_TA_02','PIS_17_TA_06'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS17_TA': objeto });
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

const getPIS17TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_17_TA_03','PIS_17_TA_04','PIS_17_TA_05'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS17_TCP': objeto });
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

const getPIS18 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_18'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS18': objeto });
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

const getPIS18Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS18Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS18': objeto });
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

const getPIS18TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_18_TA_02','PIS_18_TA_05','PIS_18_TA_06'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS18_TA': objeto });
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

const getPIS18TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_18_TA_01','PIS_18_TA_03','PIS_18_TA_04'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS18_TCP': objeto });
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

const getPIS19 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_19'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS19': objeto });
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

const getPIS19Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS19Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS19': objeto });
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

const getPIS19TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_19_TA_01','PIS_19_TA_02','PIS_19_TA_04','PIS_19_TA_05'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS19_TA': objeto });
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

const getPIS19TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_19_TA_03'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS19_TCP': objeto });
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

const getPIS20 = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['PIS_20'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS20': objeto });
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

const getPIS20Antenas = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS20Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(6)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS20': objeto });
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

const getPIS20TA = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTA(['PIS_20_TA_01','PIS_20_TA_04','PIS_20_TA_06'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS20_TA': objeto });
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

const getPIS20TCP = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['PIS_20_TA_02','PIS_20_TA_03','PIS_20_TA_05'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        obje[ex.Name.slice(7)] = ex.Value;     
                    });
                    objeto.push(obje)
                    obje = {}
                    if (objeto.length === 1) {
                        res.status(200).json({ 'PIS20_TCP': objeto });
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

const getAntenasSectoriales = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsAntenasSectoriales()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'AntSectoriales': objeto });
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

const getPiscinasInfoGeneral = async (req, res = response) => {
    let objeto = [];
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPiscinasGeneral()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                        res.status(200).json({ 'Piscinas': objeto });
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
    getPC01,
    getPC01TA,
    getPC02,
    getPC02TA,
    getPC02TCP,
    getPC03,
    getPC03TA,
    getPC03TCP,
    getPC04,
    getPC04TCP,
    getPC04TA,
    getPC05,
    getPC05TA,
    getPC05TCP,
    getPC06,
    getPC06TA,
    getPC06TCP,
    getPC07,
    getPC07TA,
    getPC07TCP,
    getPC08,
    getPC08TA,
    getPC08TCP,
    getPC09,
    getPC09TA,
    getPC09TCP,
    getPC10,
    getPC10TA,
    getPC10TCP,
    getPC11,
    getPC11TA,
    getPC12,
    getPC12TA,
    getPC12TCP,
    getPC13,
    getPC13TA,
    getPC13TCP,
    getPC14,
    getPC14TA,
    getPC14TCP,
    getPC15,
    getPC15TA,
    getPC15TCP,
    getPC16,
    getPC16TA,
    getPC17,
    getPC17TA,
    getPC17TCP,
    getPC18,
    getPC18TA,
    getPC18TCP,
    getPISO1,
    getPISO1TA,
    getPIS01TCP,
    getPISO2,
    getPISO2TA,
    getPIS02TCP,
    getPISO3,
    getPISO3TA,
    getPIS03TCP,
    getPISO4,
    getPISO4TA,
    getPIS04TCP,
    getPISO5,
    getPISO5TA,
    getPIS05TCP,
    getPISO6,
    getPISO6TA,
    getPIS06TCP,
    getPISO7,
    getPISO7TA,
    getPIS07TCP,
    getPISO8,
    getPISO8TA,
    getPIS08TCP,
    getPISO9,
    getPISO9TA,
    getPIS09TCP,
    getPIS10,
    getPIS10TA,
    getPIS11,
    getPIS11TA,
    getPIS11TCP,
    getPIS12,
    getPIS12TA,
    getPIS12TCP,
    getPIS13,
    getPIS13TA,
    getPIS13TCP,
    getPIS14,
    getPIS14TA,
    getPIS14TCP,
    getPIS15,
    getPIS15TA,
    getPIS15TCP,
    getPIS16,
    getPIS16TA,
    getPIS16TCP,
    getPIS17,
    getPIS17TA,
    getPIS17TCP,
    getPIS18,
    getPIS18TA,
    getPIS18TCP,
    getPIS19,
    getPIS19TA,
    getPIS19TCP,
    getPIS20,
    getPIS20TA,
    getPIS20TCP,
    getPC01Antenas,
    getPC02Antenas,
    getPC03Antenas,
    getPC04Antenas,
    getPC05Antenas,
    getPC06Antenas,
    getPC07Antenas,
    getPC08Antenas,
    getPC09Antenas,
    getPC10Antenas,
    getPC11Antenas,
    getPC12Antenas,
    getPC13Antenas,
    getPC14Antenas,
    getPC15Antenas,
    getPC16Antenas,
    getPC17Antenas,
    getPC18Antenas,
    getPISO1Antenas,
    getPISO2Antenas,
    getPISO3Antenas,
    getPISO4Antenas,
    getPISO5Antenas,
    getPISO6Antenas,
    getPISO7Antenas,
    getPISO8Antenas,
    getPISO9Antenas,
    getPIS10Antenas,
    getPIS11Antenas,
    getPIS12Antenas,
    getPIS13Antenas,
    getPIS14Antenas,
    getPIS15Antenas,
    getPIS16Antenas,
    getPIS17Antenas,
    getPIS18Antenas,
    getPIS19Antenas,
    getPIS20Antenas,
    getAntenasSectoriales,
    getPiscinasInfoGeneral
}