import {cRequester} from '../requester';
import {iCoinGecko} from '../interfaces';

export class coins extends cRequester implements iCoinGecko {
    public pageName: string = 'coins';

    async _id(obj: {
        id:    string,
        other: any
    }){
        obj.other.id = obj.id;
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/'+obj.id
        })
    }

    async list(obj: {
        other: any
    }){
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/list'
        })
    } 

    async markets(obj: {
        vs_currency: string,
        other:       any
    }){
        obj.other.vs_currency = obj.vs_currency;
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/list'
        })
    } 

    async tickers(obj: {
        id:    string,
        other: any
    }){
        obj.other.id = obj.id;
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/'+obj.id+'/tickers'
        })
    }

    async history(obj: {
        id:    string,
        date:  string,
        other: any
    }){
        obj.other.id = obj.id;
        obj.other.date = obj.date;
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/'+obj.id+'/history'
        })
    }

    async market_chart(obj: {
        id:           string,
        vs_currency : string,
        days:         string,
        other:        any
    }){
        obj.other.id = obj.id;
        obj.other.days = obj.days;
        obj.other.vs_currency = obj.vs_currency;
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/'+obj.id+'/market_chart'
        })
    }

    async range(obj: {
        id:           string,
        vs_currency : string,
        from:         string,
        to:           string,
        other:        any
    }){
        obj.other.id = obj.id;
        obj.other.to = obj.to;
        obj.other.from = obj.from;
        obj.other.vs_currency = obj.vs_currency;
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/'+obj.id+'/market_chart/range'
        })
    }

    async ohlc(obj: {
        id:           string,
        vs_currency : string,
        days:         string,
        other:        any
    }){
        obj.other.id = obj.id;
        obj.other.days = obj.days;
        obj.other.vs_currency = obj.vs_currency;
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/'+obj.id+'/ohlc'
        })
    }    
}