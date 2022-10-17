import {cRequester} from '../requester';
import {iCoinGecko} from '../interfaces';

export class indexes extends cRequester implements iCoinGecko {
    public pageName: string = 'indexes';
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
        id:        string,
        market_id: string,
        other:     any
    }){
        obj.other.id = obj.id;
        obj.other.market_id = obj.market_id;
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/'+obj.market_id+'/'+obj.id
        })
    }   
}