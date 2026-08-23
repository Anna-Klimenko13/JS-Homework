document.addEventListener('alpine:init', () => {
    Alpine.data('leadCard', () => ({
        init() {
            // Initial setup if required later
        }
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
