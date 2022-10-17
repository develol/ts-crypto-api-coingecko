import {cRequester} from '../requester';
import {iCoinGecko} from '../interfaces';

export class contract extends cRequester implements iCoinGecko {
    public pageName: string = 'contract';
    async _main(obj: {
        id:               string,
        contract_address: string,
        other:            any
    }){
        obj.other.id = obj.id;
        obj.other.contract_address = obj.contract_address;
        return await this.fetchSender({
            param: obj.other,
            page:  'coins/'+obj.id+'/'+this.pageName+'/'+obj.contract_address
        })
    }

    async market_chart(obj: {
        id:               string,
        contract_address: string,
        vs_currency:      string,
        days:             string,
        other:            any
    }){
        obj.other.id = obj.id;
        obj.other.days = obj.days;
        obj.other.vs_currency = obj.vs_currency;
        obj.other.contract_address = obj.contract_address;
        return await this.fetchSender({
            param: obj.other,
            page:  'coins/'+obj.id+'/'+this.pageName+'/'+obj.contract_address+'/market_chart'
        })
    }

    async market_chart_range(obj: {
        id:               string,
        contract_address: string,
        vs_currency:      string,
        from:             string,
        to:               string,
        other:            any
    }){
        obj.other.id = obj.id;
        obj.other.to = obj.to;
        obj.other.from = obj.from;
        obj.other.vs_currency = obj.vs_currency;
        obj.other.contract_address = obj.contract_address;
        return await this.fetchSender({
            param: obj.other,
            page:  'coins/'+obj.id+'/'+this.pageName+'/'+obj.contract_address+'/market_chart/range'
        })
    }  
}