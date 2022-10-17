export abstract class cRequester {
    public version   :string  = 'v3';
    public url       :string  = 'https://api.coingecko.com/api/'+this.version+'/';
    public debugging :boolean = false;

    constructor() {
    }

    responseText(obj: {
        responseType: string,
        responseText: any
    }){
        try{
            let result = {
                    ok:         true, 
                    date:       Math.round(new Date().getTime()/1000),
                    statusText: this.responseTransformer({
                        expr:     obj.responseType, 
                        responce: obj.responseText
                    })
            };
            if(this.debugging) console.log(result);
            return result;
        }catch(error){
            return this.errorHandler(error);
        }
    }

    errorHandler(error: any){
        let result = {
            ok:         false, 
            date:       Math.round(new Date().getTime()/1000),
            statusText: error
        }
        console.log(result);
        return result;
    }

    responseTransformer(obj: {expr: string, responce: any}){
        return obj.responce;
    }

    paramToString(obj: {
        param: any
    }){
        let first  = true;
        let string = '';
        for (let key in obj.param) {
            string += (first) ? '?' : '&';
            string += (
                typeof obj.param[key] === 'object' &&
                !Array.isArray(obj.param[key]) &&
                obj.param[key] !== null
            ) ? key + '=' + encodeURIComponent(JSON.stringify(obj.param[key]))
              : key + '=' + encodeURIComponent(obj.param[key]);
            first = false;
        }
        return string;
    }

    async fetchSender(obj: {
        param:        any,
        page:         string
    }){
        try{
            let string=this.paramToString({
                param: obj.param
            });
            let response: any;
            await fetch(this.url+'/'+obj.page+string, {
                method: 'GET',
            }).then((res: any) => res.text())
            .then((text: any) => response = JSON.parse(text));
            return this.responseText({
                responseType: obj.page,
                responseText: response
            });
        }catch(error: any){
            return this.errorHandler(error);
        }
    }
}