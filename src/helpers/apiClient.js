export const apiClient = async () => {

    const url = "https://api.datos.gob.mx/v1/calidadAire";

    let {results} = await ( await fetch(url)).json();
    
    const stat = results.map(({stations})=>stations);

    let res =[];
    stat.forEach(element => {
       element.forEach( item => {res.push(item)})
    });

    res = res.map(({id,indexes,location,name,source_id}) => ({
        id:id,
        indexes: `${indexes[0].calculationTime } / ${indexes[0].scale} / ${indexes[0].value}`,
        location: `${location.alt} / ${location.lat} / ${location.lon}`,
        name: name,
        source_id:source_id

    }));
    
    return res;
}
