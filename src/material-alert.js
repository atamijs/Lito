import { LitElement, html, css } from 'lit';

export default class MaterialAlert extends LitElement {
    static styles = css`
        :host {
            display: block;
            margin: 1rem 0;
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            border-left: 4px solid;
            max-width: 600px;
        }
        
        :host(:hover) {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            transform: translateY(-2px);
        }
        
        .alert-header {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
            gap: 0.75rem;
        }
        
        .alert-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0;
        }
        
        .alert-content {
            margin: 0;
            color: rgba(0, 0, 0, 0.87);
            line-height: 1.5;
        }
        
        /* Type styles */
        :host([type="warning"]) {
            background-color: #FFF8E1;
            border-color: #FFC107;
        }
        
        :host([type="warning"]) .alert-title {
            color: #FF8F00;
        }
        
        :host([type="info"]) {
            background-color: #E3F2FD;
            border-color: #2196F3;
        }
        
        :host([type="info"]) .alert-title {
            color: #1976D2;
        }
        
        :host([type="tip"]) {
            background-color: #E8F5E9;
            border-color: #4CAF50;
        }
        
        :host([type="tip"]) .alert-title {
            color: #388E3C;
        }
        
        /* Custom color styles - increase priority */
        :host([customColor]) {
            --border-color: var(--computed-custom-color);
            --title-color: var(--computed-custom-color);
            --bg-color: var(--computed-bg-color);
            
            border-color: var(--border-color) !important;
            background-color: var(--bg-color) !important;
        }
        
        :host([customColor]) .alert-title {
            color: var(--title-color) !important;
        }
        
        /* Icon styles */
        .material-icon {
            font-family: 'Material Icons';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            -webkit-font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
        }
        
        /* Close button */
        .close-btn {
            background: none;
            border: none;
            cursor: pointer;
            color: rgba(0, 0, 0, 0.54);
            font-size: 1.5rem;
            padding: 0;
            margin-left: auto;
            opacity: 0.7;
            transition: opacity 0.2s ease;
        }
        
        .close-btn:hover {
            opacity: 1;
        }
        
        /* Animation */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        :host {
            animation: fadeIn 0.3s ease-out forwards;
        }
    `;

    static properties = {
        type: { type: String },
        title: { type: String },
        customColor: { type: String },
        closable: { type: Boolean }
    };

    constructor() {
        super();
        this.type = 'info'; // default type
        this.title = '';
        this.customColor = '';
        this.closable = false;
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        // Update styles when custom color or type changes
        if (changedProperties.has('customColor') || changedProperties.has('type')) {
            this.applyCustomColors();
        }
    }

    applyCustomColors() {
        if (this.customColor) {
            // Compute a softer background color
            const bgColor = this.lightenColor(this.customColor, 0.8);
            // Apply colors via CSS variables to ensure specificity
            this.style.setProperty('--computed-custom-color', this.customColor);
            this.style.setProperty('--computed-bg-color', bgColor);
        }
    }

    // Helper function to lighten a color
    lightenColor(color, percent) {
        if (color.startsWith('#')) {
            let hex = color.replace('#', '');
            if (hex.length === 3) {
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }

            let r = parseInt(hex.substring(0, 2), 16);
            let g = parseInt(hex.substring(2, 4), 16);
            let b = parseInt(hex.substring(4, 6), 16);

            // Calculate a softer background color
            r = Math.min(255, r + (255 - r) * percent);
            g = Math.min(255, g + (255 - g) * percent);
            b = Math.min(255, b + (255 - b) * percent);

            return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
        }
        return color;
    }

    closeAlert() {
        this.style.opacity = '0';
        this.style.transform = 'translateY(10px)';
        setTimeout(() => {
            this.remove();
        }, 300);
    }

    getIcon() {
        // Custom color can also specify an icon
        if (this.customColor) {
            return this.type ? this.getIconForType(this.type) : 'comment';
        }
        return this.getIconForType(this.type);
    }

    getIconForType(type) {
        switch(type) {
            case 'warning': return 'warning';
            case 'info': return 'info';
            case 'tip': return 'lightbulb';
            default: return 'comment';
        }
    }

    render() {
        return html`
            <div class="alert-header">
                <i class="material-icon">${this.getIcon()}</i>
                ${this.title ? html`<h3 class="alert-title">${this.title}</h3>` : ''}
                ${this.closable ? html`
                    <button class="close-btn" @click=${this.closeAlert}>
                        <i class="material-icon">close</i>
                    </button>
                ` : ''}
            </div>
            <p class="alert-content"><slot></slot></p>
        `;
    }
}

