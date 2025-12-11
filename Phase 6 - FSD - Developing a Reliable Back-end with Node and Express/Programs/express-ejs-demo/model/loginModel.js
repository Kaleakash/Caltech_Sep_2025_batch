// map to collection in mongo db 
class Login {
    constructor(emailId,password){
        this.emailId =emailId;
        this.password=password;
    }
}

module.exports =Login;