(function($) {
    $.fn.simpleDrag = function() {
        return this.each(function() {
            var $element = $(this);
            var is_drag = false;

            $element.on('mousedown', function() {
                is_drag = true;
                $element.trigger('dragstart');
            });

            $(document).on('mouseup mouseleave', function() {
                if (is_drag) {
                    is_drag = false;
                    $element.trigger('dragend');
                }
            });

            $element.on('mousemove', function(e) {
                if (is_drag) {
                    $element.trigger('dragging', e);
                }
            });
        });
    };
})(jQuery);