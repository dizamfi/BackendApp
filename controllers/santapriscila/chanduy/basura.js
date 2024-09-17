const getEb1B = async (req, res = response) => {
    let objeto = [];
    try {
        
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsChanduyG1ST1()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let tagReadCommand2 = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsChanduyG1ST2()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let tagReadCommand3 = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsChanduyG2ST1()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let tagReadCommand4 = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsChanduyG2ST2()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let tagReadCommand5 = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsChanduyG3ST1()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let tagReadCommand6 = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsChanduyG3ST2()}},"ClientCookie":"myReadTagRequest1"}\n`;
            client.write(tagReadCommand);
            client.write(tagReadCommand2);
            client.write(tagReadCommand3);
            client.write(tagReadCommand4);
            client.write(tagReadCommand5);
            client.write(tagReadCommand6);
            
            let x = 0;
            let g = ''
            let st = ''
            let grupo1 = ''
            const rl = readline.createInterface({
                input: client, 
                crlfDelay: Infinity
            });
            let obje = {}
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message == 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags 
                    arreglo.map(( ex, i ) => { 
                        if (grupo1 == '') {
                            grupo1 = ex.Name.slice(3,5);
                            g = ex.Name.slice(3,5)
                            st = ex.Name.slice(6,9)
                        }
                        //console.log(ex.Name.slice(3,5))
                        //console.log(ex.Name.slice(6,9))
                        const arr = arreglo.length -1
                        
                        if (grupo1 == ex.Name.slice(3,5) || x==5) {  //g2
                            obje[ex.Name.slice(10,)] = ex.Value
                            grupo1 = ex.Name.slice(3,5)  //g1
                            if (arr == i &&  x==5) {
                                //console.log(x)
                                //objeto[ex.Name.slice(6,9)] = obje
                                
                                objeto.push({
                                    [g] : {
                                        [st] : obje
                                    }
                                    
                                })
                                //console.log(obje)
                                x++
                                g = ex.Name.slice(3,5) // g = g2
                                st = ex.Name.slice(6,9)
                                grupo1 = ex.Name.slice(3,5)
                                //console.log(g)
                                //console.log(x)
                                obje={}
                                
                                //return obje
                            }
                            
                        }else {
                            //console.log(`Objetooo: ${obje}`)
                            if (g != ex.Name.slice(3,5) || x==0 || x==5 ) {
                                //console.log(x)
                                //objeto[ex.Name.slice(6,9)] = obje
                                objeto.push({
                                    [g] : {
                                        [st] : obje
                                    }
                                    
                                })
                                //console.log(obje)
                                x++
                                g = ex.Name.slice(3,5) // g = g2
                                st = ex.Name.slice(6,9)
                                grupo1 = ex.Name.slice(3,5)
                                //console.log(g)
                                //console.log(x)
                                obje={}
                                
                                //return obje
                            }                           
                        }             
                    });
                    //console.log(resp)  
                    //objeto.push(resp)     
                }
                if(objeto.length == 6) res.status(200).json({
                    '1B': objeto
                })
                //console.log(Object.keys(objeto).length )

                //if(Object.keys(objeto).length == 2) res.status(200).json({
                    //'1B': objeto
                //})

                //if(objeto.length == 6) res.status(200).json({objeto});
            });
          

        });   
        
    } catch (error) {
        
    }
}