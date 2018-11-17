export class AuthException{
    
    get message():string{
        return 'Authentication failed, username or password are incorrect';
    }
}