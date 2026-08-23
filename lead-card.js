document.addEventListener('alpine:init', () => {
    Alpine.data('leadCard', () => ({
        
    }));

    Alpine.data('pipelineHover', () => ({
        hovered: 0,
        hoverTo(stepIndex) {
            this.hovered = stepIndex;
        },
        resetHover() {
            this.hovered = 0;
        }
    }));
});
