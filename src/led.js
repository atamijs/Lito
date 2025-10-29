// LED Marquee Component - Standalone Version
// Include this file in your HTML to use the component

// Import Lit from CDN
import { LitElement, html, css } from 'https://unpkg.com/lit@3.1.0/index.js?module';

export default class LedMarquee extends LitElement {
    static properties = {
        text: { type: String },
        speed: { type: Number },
        color: { type: String },
        background: { type: String },
        size: { type: String },
        pauseOnHover: { type: Boolean },
        direction: { type: String }
    };

    static styles = css`
        :host {
            display: block;
            --led-color: #4CAF50;
            --led-background: #000;
            --led-speed: 10s;
            --led-font-size: 24px;
        }
        
        .marquee-container {
            overflow: hidden;
            position: relative;
            background: var(--led-background);
            border-radius: 4px;
            padding: 8px 0;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        
        .marquee-content {
            display: inline-block;
            white-space: nowrap;
            animation: marquee var(--led-speed) linear infinite;
            font-family: 'Courier New', monospace;
            font-weight: bold;
            color: var(--led-color);
            text-shadow: 0 0 5px currentColor, 0 0 10px currentColor;
            font-size: var(--led-font-size);
            letter-spacing: 1px;
        }
        
        .marquee-content.paused {
            animation-play-state: paused;
        }
        
        @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }
        
        @keyframes marquee-reverse {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
    `;

    constructor() {
        super();
        this.text = 'LED Marquee';
        this.speed = 5;
        this.color = '#4CAF50';
        this.background = '#000';
        this.size = 'medium';
        this.pauseOnHover = false;
        this.direction = 'left';
    }

    updated(changedProperties) {
        if (changedProperties.has('speed')) {
            this.style.setProperty('--led-speed', `${20 - this.speed}s`);
        }
        
        if (changedProperties.has('color')) {
            this.style.setProperty('--led-color', this.color);
        }
        
        if (changedProperties.has('background')) {
            this.style.setProperty('--led-background', this.background);
        }
        
        if (changedProperties.has('size')) {
            const sizes = {
                small: '18px',
                medium: '24px',
                large: '32px'
            };
            this.style.setProperty('--led-font-size', sizes[this.size] || '24px');
        }
        
        if (changedProperties.has('direction')) {
            this.updateAnimation();
        }
    }

    updateAnimation() {
        const content = this.shadowRoot.querySelector('.marquee-content');
        if (!content) return;
        
        content.style.animationName = `marquee${this.direction === 'right' ? '-reverse' : ''}`;
    }

    handleMouseEnter() {
        if (this.pauseOnHover) {
            const content = this.shadowRoot.querySelector('.marquee-content');
            if (content) content.classList.add('paused');
        }
    }

    handleMouseLeave() {
        if (this.pauseOnHover) {
            const content = this.shadowRoot.querySelector('.marquee-content');
            if (content) content.classList.remove('paused');
        }
    }

    render() {
        return html`
            <div 
                class="marquee-container"
                @mouseenter=${this.handleMouseEnter}
                @mouseleave=${this.handleMouseLeave}
            >
                <div class="marquee-content">${this.text}</div>
            </div>
        `;
    }
}

customElements.define('led-marquee', LedMarquee);