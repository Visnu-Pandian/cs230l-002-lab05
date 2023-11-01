

function Contact() {
    return(
        <form>
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" className="form-control" />
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" className="form-control" />
            </div>
            <div class="form-group">
                <label for="phoneNumber">Phone Number</label>
                <input type="number" className="form-control" />
            </div>
            <div class="form-group">
                <label for="emailAddress">Email Address</label>
                <input type="email" className="form-control" />
            </div>
            <div class="form-group">
                <label for="country">Country</label>
                <input type="text" className="form-control" />
            </div>
            <div class="form-group">
                <label for="customMessage">Message</label>
                <input type="text" className="form-control" />
            </div>
        </form>
    );
}

export default Contact;