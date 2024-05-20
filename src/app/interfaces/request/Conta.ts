import { DecimalPipe } from "@angular/common";
export interface Conta {
    nome: string;
    numeroAgencia: string;
    numeroConta: string;
    saldo : DecimalPipe;
}