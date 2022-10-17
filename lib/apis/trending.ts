import {cRequester} from '../requester';
import {iCoinGecko} from '../interfaces';

export class trending extends cRequester implements iCoinGecko {
    public pageName: string = 'trending';
    async _main(obj: {
        other: any
    }){
        return await this.fetchSender({
            param: obj.other,
            page: 'search/'+this.pageName
        })
    } 
}