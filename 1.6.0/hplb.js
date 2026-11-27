// HPlb v1.6.0
//danger-card
class DangerCard extends HTMLElement {
    constructor() {
        super();
        var content = this.innerHTML
        this.innerHTML = `
        <div style="background-color: rgb(255, 97, 97); border-left: 5px solid red; border-radius: 5px; width: max-content; padding-left: 5px; padding-right: 5px; cursor:not-allowed;">
            <h3>${this.getAttribute("title")}</h3>
            <h5>${content}</h5>
        </div>
        `
    }
}
customElements.define("danger-card", DangerCard)
//info-card
class InfoCard extends HTMLElement {
    constructor() {
        super();
        var content = this.innerHTML
        this.innerHTML = `
        <div style="background-color: rgb(207, 226, 232); border-left: 5px solid lightblue; border-radius: 5px; width: max-content; padding-left: 5px; padding-right: 5px; cursor:help;">
            <h3>${this.getAttribute("title")}</h3>
            <h5>${content}</h5>
        </div>
        `
    }
}
customElements.define("info-card", InfoCard)
//custom-card
class CustomCard extends HTMLElement {
    constructor() {
        super();
        var content = this.innerHTML
        this.innerHTML = `
        <div style="background-color: ${this.getAttribute("bg-cl")}; border-left: 5px solid ${this.getAttribute("cl-cl")}; border-radius: 5px; width: max-content; padding-left: 5px; padding-right: 5px; cursor:pointer;">
            <h3>${this.getAttribute("title")}</h3>
            <h5>${content}</h5>
        </div>
        `
    }
}
customElements.define("custom-card", CustomCard)
