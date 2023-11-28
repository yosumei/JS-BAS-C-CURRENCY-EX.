class Currency{
    constructor(){
      this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=DwubsVWBQzrAI1rY529XjbZy1rny84BA3XaIujP0&base_currency=";
    }
    async exchange(amount,firstCurrency,SecondCurrency){
      const response= await fetch(`${this.url}${firstCurrency}`);
      const result=await response.json()
const exchancedResult= amount*result.data[SecondCurrency];
return exchancedResult;
    }

}