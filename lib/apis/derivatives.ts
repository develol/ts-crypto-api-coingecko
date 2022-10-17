import {cRequester} from '../requester';
import {iCoinGecko} from '../interfaces';

export class derivatives extends cRequester implements iCoinGecko {
    public pageName: string = 'derivatives';
    async _main(obj: {
        other: any
    }){
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName
        })
    }

    async exchanges(obj: {
        other: any
    }){
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/exchanges'
        })
    } 

    async exchanges_id(obj: {
        id:    string,
        other: any
    }){
        obj.other.id = obj.id;
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/exchanges/'+obj.id
        })
    }

    async exchanges_list(obj: {
        other: any
    }){
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/exchanges/list'
        })
    } 
}