
export class Login {
    constructor(
        
        public prenom:string,
        public nom:string,
        public numCarte:number,
        public dateExp:Date,
        public cryptogramme:number,
        public email:string, 
        public password:string )
        {}
}
