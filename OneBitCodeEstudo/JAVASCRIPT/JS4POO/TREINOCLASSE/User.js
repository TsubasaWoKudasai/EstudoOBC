class User {
    constructor (fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
    }

    login (email, password) {
        if (this.email === email && this.password === password) {
            console.log (" login feito patrao")
        } else {
            console.log (" login negado patrao")
        }
    }

}


const john = new User (" John Doe", "john@email.com", "1234")


console.log (john)
john.login("john@email.com", "1234")