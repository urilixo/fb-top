import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["menu", "hamburger", "close"]
    static values = { isOpen: { type: Boolean, default: false } }

    menu() {
        this.isOpenValue ? this.hide() : this.show();
    }

    show() {
        this.menuTarget.style.display = "block";
        this.hamburgerTarget.style.display = "none"
        this.closeTarget.style.display = "block"
        this.isOpenValue = true;
    }

    hide() {
        this.menuTarget.style.display = "none";
        this.hamburgerTarget.style.display = "block"
        this.closeTarget.style.display = "none"
        this.isOpenValue = false;
    }
}