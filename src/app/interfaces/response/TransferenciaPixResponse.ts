export interface TransferenciaPixResponse{
    idTransaction: number,
    customerNameOrigin: string,
    customerNameDestiny: string,
    dateTransaction: Date,
    typeTransaction: string,
    value: number
}