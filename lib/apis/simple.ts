import {cRequester} from '../requester';
import {iCoinGecko} from '../interfaces';

export class simple extends cRequester implements iCoinGecko {
    public pageName: string = 'simple';
    
    async price(obj: {
        ids:           string,
        vs_currencies: string,
        other:         any
    }){
        obj.other.ids = obj.ids;
        obj.other.vs_currencies = obj.vs_currencies;
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/price'
        })
    }  
    
    async token_price(obj: {
        id:                 string,
        vs_currencies:      string,
        contract_addresses: string,
        other:              any
    }){
        obj.other.vs_currencies = obj.vs_currencies;
        obj.other.contract_addresses = obj.contract_addresses;
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/token_price/'+ obj.id
        })
    }

    async supported_vs_currencies(obj: {
        other: any
    }){
        return await this.fetchSender({
            param: obj.other,
            page: this.pageName+'/supported_vs_currencies'
        })
    }
}