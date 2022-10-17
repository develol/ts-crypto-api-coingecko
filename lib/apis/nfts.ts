import {cRequester} from '../requester';
import {iCoinGecko} from '../interfaces';

export class nfts extends cRequester implements iCoinGecko {
    public pageName: string = 'nfts';

    async list(obj: {
        other: any
    }){
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/list'
        })
    } 

    async _id(obj: {
        id:    string,
        other: any
    }){
        obj.other.id = obj.id;
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/'+obj.id
        })
    }

    async contract(obj: {
        asset_platform_id: string,
        contract_address:  string,
        other:             any
    }){
        obj.other.contract_address = obj.contract_address;
        obj.other.asset_platform_id = obj.asset_platform_id;
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/'+obj.asset_platform_id+'/contract/'+obj.contract_address
        })
    }  
}