document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-questions]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (button) {
            const tabSelect = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id = ${tabSelect}]`);
            const buttton = document.querySelector(`[data-tab-button = ${tabSelect}]`);

            hideTeam()
            tab.classList.add('teams__list--is-active')

            hidebutton()
            buttton.classList.add('teams__tabs__button--is-active')

        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', isOpenQuestion)
    }
})

function isOpenQuestion(e) {
    const classActive = 'faq__questions__item--is-open'
    const fatherElement = e.target.parentNode.parentNode;
    fatherElement.classList.toggle(classActive)

}
function hideTeam() {
    const tabs = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('teams__list--is-active')
    }
}
function hidebutton() {
    const button = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('teams__tabs__button--is-active')
    }
}