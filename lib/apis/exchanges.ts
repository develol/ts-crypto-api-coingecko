import {cRequester} from '../requester';
import {iCoinGecko} from '../interfaces';

export class exchanges extends cRequester implements iCoinGecko {
    public pageName: string = 'exchanges';
    async _main(obj: {
        other: any
    }){
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName
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
    
    async volume_chart(obj: {
        id:    string,
        days:  string,
        other: any
    }){
        obj.other.id = obj.id;
        obj.other.days = obj.days;
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/'+obj.id+'/volume_chart'
        })
    }  
}