import {cRequester} from '../requester';
import {iCoinGecko} from '../interfaces';

export class ping extends cRequester implements iCoinGecko {
    public pageName: string = 'ping';
    async _main(obj: {
        other: any
    }){
        return await this.fetchSender({
            param: obj.other,
            page:  this.pageName
        })
    }   
}