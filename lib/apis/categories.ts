import {cRequester} from '../requester';
import {iCoinGecko} from '../interfaces';

export class categories extends cRequester implements iCoinGecko {
    public pageName: string = 'categories';
    async _main(obj: {
        other: any
    }){
        return await this.fetchSender({
            param: obj.other,
            page:  'coins/'+this.pageName
        })
    }   

    async list(obj: {
        other: any
    }){
        return await this.fetchSender({
            param: obj.other,
            page:  'coins/'+this.pageName+'/list'
        })
    } 
}