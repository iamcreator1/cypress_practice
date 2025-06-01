import SignupForm from "./forms/SignupForm"

class HomePage {

    get signInButton() {
        return cy.get('button.hero-descriptor_btn.btn.btn-primary')
    }

    visit() {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            }
        })
    }

    openSignupForm() { 
        this.signInButton.click()
    }





}


export default new HomePage()