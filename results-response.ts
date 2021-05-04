export interface ElectionsResult {
    amb:        string;
    numact:     string;
    mdhm:       string;
    totales:    Totales;
    ultimo:     Ultimo;
    otros:      Otros;
    partotabla: Partotabla[]; // Aquí está la información de los pactos parece
    mapagan:    Mapagan[];
}

export interface Mapagan {
    amb:     string;
    codpar:  string;
    string:  string;
    pvot:    string;
    pvotant: string;
}

export interface Otros {
    act: PreviousResults;
    ant: PreviousResults;
}

export interface PreviousResults {
    codpar: string;
    vot:    string;
    pvot:   string;
    carg:   string;
}

export interface Partotabla {
    act: CurrentResults;
    ant: PreviousResults;
}

export enum PartiesCodes {
    // Extracted from https://resultados2021.comunidad.madrid/assets/nomenclator.json
    '3e en acción' = '0001',
    'Cs' = '0002',
    'EB' = '0003',
    'EMPATE' = '5998',
    'FE de las JONS' = '0004',
    'MÁS MADRID' = '0005',
    'OTROS' = '5999',
    'P-LIB' = '0012',
    'P.S.O.E.' = '0016',
    'PACMA' = '0006',
    'PARTIDO AUTÓNOMOS' = '0007',
    'PCOE-PCPE' = '0008',
    'PCTE' = '0009',
    'PH' = '0011',
    'PODEMOS-IU' = '0013',
    'POLE' = '0014',
    'PP' = '0015',
    'PUM+J' = '0017',
    'RECORTES CERO-PCAS-TC-GV-M' = '0018',
    'UDEC' = '0019',
    'VOLT' = '0022',
    'VOX' = '0023'
}

export interface CurrentResults {
    codpar: PartiesCodes; // Código del partido politico
    vot:    string; // Votos
    dvot:   string; // diferencia respecto a las anteriores
    pvot:   string; // Porcentaje
    dpvot:  string; // diferencia porcentaje a las anteriores
    carg:   string; // escaños
    dcarg:  string; // diferencia de escaños
}

export interface Totales {
    act: TotalesAct;
    ant: Ant;
}

export interface TotalesAct {
    metota:    string;
    mesesc:    string;
    pmesesc:   string;
    padron:    string;
    centota:   string;
    cenes:     string;
    string:    string;
    votant:    string;
    pvotant:   string;
    dpvotant:  string;
    absten:    string;
    pabsten:   string;
    dpabsten:  string;
    votnul:    string;
    pvotnul:   string;
    dpvotnul:  string;
    votbla:    string;
    pvotbla:   string;
    dpvotbla:  string;
    votcan:    string;
    pvotcan:   string;
    dpvotcan:  string;
    votval:    string;
    pvotval:   string;
    dpvotval:  string;
    pexclus:   string;
    carg:      string;
    gancodpar: string;
}

export interface Ant {
    metota:    string;
    padron:    string;
    centota:   string;
    votant:    string;
    pvotant:   string;
    absten:    string;
    pabsten:   string;
    votnul:    string;
    pvotnul:   string;
    votbla:    string;
    pvotbla:   string;
    votcan:    string;
    pvotcan:   string;
    votval:    string;
    pvotval:   string;
    carg:      string;
    gancodpar: string;
}

export interface Ultimo {
    gan:        Gan;
    asptotabla: any[];
}

export interface Gan {
    codpar: string;
}
