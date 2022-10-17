import {cRequester} from '../requester';
import {iCoinGecko} from '../interfaces';

export class exchange_rates extends cRequester implements iCoinGecko {
    public pageName: string = 'exchange_rates';
    async _main(obj: {
        other: any
    }){
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName
        })
    } 
}