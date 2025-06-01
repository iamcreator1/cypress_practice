class SignUpFrom {

    get nameField() {
        return cy.get('#signupName')
    }

    get lastNameField() {
        return cy.get('#signupLastName')
    }

    get emailField() {
        return cy.get('#signupEmail')
    }

    get passwordField() {
        return cy.get('#signupPassword')
    }

    get reEnterPasswordField() {
        return cy.get('#signupRepeatPassword')
    }

    get registerButton() {

    }

    ///Firstname errors

    get nameRequiredError() {
        return cy.contains('Name required')
    }

    get nameIsInvalidError() {
        return cy.contains('Name is invalid')
    }

    get wrongLengthError() {
        return cy.contains('Name has to be from 2 to 20 characters long')
    }

    get redColoredBorder() {
        return cy.should('have.css', 'border-color', 'rgb(220, 53, 69)')
    }

    /// LastName errors
    get lastNamerRequiredError() {
        return cy.contains('Last name required')
    }

    get lastNameIsIvalidError() {
        return cy.contains('Last name is invalid')
    }

    get lastNameWrongLengthError() {
        return cy.contains('Last name has to be from 2 to 20 characters long')
    }

    ///Email error

    get emailIsIncorrectError() {
        return cy.contains('Email is incorrect')
    }

    get emailIsRequiredError() {
        return cy.contains('Email required')
    }

    /// Password error
    get passwordWrongLenghtError() {
        return cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
    }

    get passwordIsRequiredError() {
        return cy.contains('Password required')
    }

    ///reEnter Password

    get passwordIsNotMatchError() {
        return cy.contains('Passwords do not match')
    }

    get reEnterPasswordIsRequiredError() {
        return cy.contains('Re-enter password required')
    }

    ///methods
    submitButton() {
        return cy.get('.modal-footer button').click()
    }

    get personalCabinetPage() {
        cy.url('eq', 'https://qauto.forstudy.space/panel/garage')
    }

    get userAlreadyExist() {
        cy.contains('User already exists')
    }


}

export default new SignUpFrom()