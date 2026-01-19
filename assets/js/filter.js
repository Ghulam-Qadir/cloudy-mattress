$(document).ready(function () {

    const productItems = $('.product-item');

    function filterProducts() {
        console.log('Filtering products...');
        const minPrice = parseInt($('#min-price').val(), 10) || 0;
        const maxPrice = parseInt($('#max-price').val(), 10) || 999999;

        const activeFilters = {
            price: { min: minPrice, max: maxPrice }
        };

        // Collect checked filters
        $('.filter-group[data-filter]').each(function () {
            const filterName = $(this).data('filter');
            activeFilters[filterName] = [];

            $(this)
                .find('input[type="checkbox"]:checked')
                .each(function () {
                    const val = $(this).val();
                    if (val) activeFilters[filterName].push(val);
                });
        });

        // Apply filters
        productItems.each(function () {
            const product = $(this);
            let show = true;

            // Price check
            const price = parseInt(product.data('price'), 10);
            if (price < activeFilters.price.min || price > activeFilters.price.max) {
                show = false;
            }

            // Attribute checks
            for (const filter in activeFilters) {
                if (filter === 'price') continue;

                if (activeFilters[filter].length > 0) {
                    const dataValue = product.data(filter);
                    if (!dataValue) {
                        show = false;
                        break;
                    }

                    const productValues = String(dataValue)
                        .split(',')
                        .map(v => v.trim());

                    const match = activeFilters[filter].some(val =>
                        productValues.includes(val)
                    );

                    if (!match) {
                        show = false;
                        break;
                    }
                }
            }

            product.toggle(show);
        });
    }

    /* EVENTS */

    // IMPORTANT: bind to document, not sidebar
    $(document).on('change', '.filter-group input[type="checkbox"]', filterProducts);

    $('#min-price, #max-price').on('input', function () {
        $('#min-price-value').text(`$${$('#min-price').val()}`);
        $('#max-price-value').text(`$${$('#max-price').val()}`);
        filterProducts();
    });

    // Accordion
    $(document).on('click', '.filter-title, .filter-toggle', function () {
        $(this).next('.filter-content, .filter-options').slideToggle();
    });

    // Init
    filterProducts();

    function syncPriceSliders() {
        const minInput = $('#min-price');
        const maxInput = $('#max-price');
    
        let minVal = parseInt(minInput.val(), 10);
        let maxVal = parseInt(maxInput.val(), 10);
    
        // Prevent crossing
        if (minVal > maxVal) {
            [minVal, maxVal] = [maxVal, minVal];
            minInput.val(minVal);
            maxInput.val(maxVal);
        }
    
        // Update labels
        $('#min-price-value').text(`$${minVal}`);
        $('#max-price-value').text(`$${maxVal}`);
    
        // Update active track
        const range = minInput.attr('max') - minInput.attr('min');
        const left = ((minVal - minInput.attr('min')) / range) * 100;
        const right = 100 - ((maxVal - minInput.attr('min')) / range) * 100;
    
        $('.price-slider').css({
            '--left': `${left}%`,
            '--right': `${right}%`
        });
    }
    
    // Bind ONLY to price inputs
    $('#min-price, #max-price').on('input', function () {
        syncPriceSliders();
    });
    

});

