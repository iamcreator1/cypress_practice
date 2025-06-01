/// <reference types="cypress"/>
import HomePage from "../../pom/pages/HomePage"
import SignupForm from "../../pom/pages/forms/SignupForm"


describe('Sign Up form', () => {
    beforeEach(() => {
        HomePage.visit()
        HomePage.openSignupForm()
    })

    context('Test-cases for "Name" field', () => {
        it('verify "name is required" error', () => {
            SignupForm.nameField.focus().blur()
            SignupForm.nameRequiredError
        })

        it('verify "name if invalid" error', () => {
            SignupForm.nameField.type('!!').blur()
            SignupForm.nameIsInvalidError
        })

        it('verify "wrong lenght" error', () => {
            SignupForm.nameField.type('a').blur()
            SignupForm.wrongLengthError
        })

        it('verify error has red color borders', () => {
            SignupForm.nameField.focus().blur()
            SignupForm.redColoredBorder
        })

    })

    context('Test-cases for "Last name" field', () => {
        it('verify "last name is required" error', () => {
            SignupForm.lastNameField.focus().blur()
            SignupForm.lastNamerRequiredError

        })

        it('verify "lastName is invalid" error', () => {
            SignupForm.lastNameField.type('!!').blur()
            SignupForm.lastNameIsIvalidError
        })

        it('verify "wrong length" error', () => {
            SignupForm.lastNameField.type('a').blur()
            SignupForm.lastNameWrongLengthError
        })

        it('verify error has red color borders', () => {
            SignupForm.lastNameField.focus().blur()
            SignupForm.redColoredBorder
        })


    })

    context('Test-cases for "Email" field', () => {
        it('verify "email is incorrect" error', () => {
            SignupForm.emailField.type('qwerty@qwerty').blur()
            SignupForm.emailIsIncorrectError
        })

        it('verify "email is required" error', () => {
            SignupForm.emailField.focus().blur()
            SignupForm.emailIsRequiredError
        })

        it('verify error has red color borders', () => {
            SignupForm.emailField.focus().blur()
            SignupForm.redColoredBorder
        })
    })

    context('Test-cases for "Password" field', () => {
        it('verify "password wrong lenght" error ', () => {
            SignupForm.passwordField.type('aa').blur()
            SignupForm.passwordWrongLenghtError
        })

        it('verify "password is required" error', () => {
            SignupForm.passwordField.focus().blur()
            SignupForm.passwordIsRequiredError
        })

        it('verify error has red border color', () => {
            SignupForm.passwordField.focus().blur()
            SignupForm.redColoredBorder
        })
    })

    context('Test-cases for "Re-enter password" field', () => {
        it('verify "Passwords do not match" error', () => {
            SignupForm.passwordField.type('testPass1')
            SignupForm.reEnterPasswordField.type('testPass2').blur()
            SignupForm.passwordIsNotMatchError
        })

        it('verify "reEnter Password is required" error', () => {
            SignupForm.reEnterPasswordField.focus().blur()
            SignupForm.reEnterPasswordIsRequiredError
        })

        it('verify error has red color borders', () => {
            SignupForm.reEnterPasswordField.focus().blur()
            SignupForm.redColoredBorder
        })
    })

    context('Test-cases for "[Register]" button', () => {
        it('verify "successfull" registration', () => {
            const email = `user+${Date.now()}@test.com`
            SignupForm.nameField.type('Dmytro')
            SignupForm.lastNameField.type('Romanenko')
            SignupForm.emailField.type(email)
            SignupForm.passwordField.type('testPass1')
            SignupForm.reEnterPasswordField.type('testPass1').wait(1000)
            SignupForm.submitButton()
            SignupForm.personalCabinetPage
        })


    })


})
