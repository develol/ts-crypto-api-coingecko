import {cRequester} from '../requester';
import {iCoinGecko} from '../interfaces';

export class companies extends cRequester implements iCoinGecko {
    public pageName: string = 'companies';
    async public_treasury(obj: {
        coin_id: string,
        other:   any
    }){
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/public_treasury/'+obj.coin_id
        })
    } 
}