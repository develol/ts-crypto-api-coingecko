import {cRequester} from '../requester';
import {iCoinGecko} from '../interfaces';

export class asset_platforms extends cRequester implements iCoinGecko {
    public pageName: string = 'asset_platforms';
    async _main(obj: {
        other: any
    }){
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName
        })
    }    
}