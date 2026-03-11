class LoginPage {
    get usernameField() { return $('input[name="username"]'); }
    get passwordField() { return $('input[name="password"]'); }
    get loginButton() { return $('button[type="submit"]'); }
    get errorMessage() { return $('div.error'); }

    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}
