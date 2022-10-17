import {cRequester} from '../requester';
import {iCoinGecko} from '../interfaces';

export class search extends cRequester implements iCoinGecko {
    public pageName: string = 'search';
    async _main(obj: {
        query: string,
        other: any
    }){
        obj.other.query = obj.query;
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName
        })
    } 
}