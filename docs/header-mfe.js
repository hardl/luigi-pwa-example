export default class extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');

    template.innerHTML = /* html */`
      <div class="cnt">
        <style>
          :host > div {
            padding: 1rem;
            background-color: var(--sapObjectHeader_Background);
            position: relative;
          }
          .ac-hidden .additionalContent {
            display: none;
          }

          .exp_coll_btn {
            position: absolute;
            bottom: -1rem;
            left: 49%;
          }

          .ac-hidden .ex, .col {
            display: inline;
          }

          .ac-hidden .col, .ex {
            display: none;
          }

          
        </style>
        <section>
          <p>Hello World!</p>
        </section>
        <section class="additionalContent">
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>
        </section>
        <button class="exp_coll_btn"><span class="ex">v</span><span class="col">^</span></button>
      </div>
    `;
    this._shadowRoot = this.attachShadow({ mode: 'open', delegatesFocus: false });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$paragraph = this._shadowRoot.querySelector('p');
    this.$cnt = this._shadowRoot.querySelector('.cnt');
    this.$btn = this._shadowRoot.querySelector('.exp_coll_btn');
    this.$btn.addEventListener('click', () => {
      this.$cnt.classList.toggle('ac-hidden');
    });
  }

  set context(ctx) {
    this.$paragraph.innerHTML = ctx.title;
  }
}
