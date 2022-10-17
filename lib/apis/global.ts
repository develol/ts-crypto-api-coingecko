import {cRequester} from '../requester';
import {iCoinGecko} from '../interfaces';

export class global extends cRequester implements iCoinGecko {
    public pageName: string = 'global';
    
    async _main(obj: {
        other: any
    }){
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName
        })
    } 

    async decentralized_finance_defi(obj: {
        other: any
    }){
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/decentralized_finance_defi'
        })
    } 
}