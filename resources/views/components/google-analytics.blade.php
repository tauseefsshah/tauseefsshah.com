@production
<script async src="https://www.googletagmanager.com/gtag/js?id={{ env('GA_MEASUREMENT_IDGA_MEASUREMENT_ID') }}"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', '{{ env("GA_MEASUREMENT_IDGA_MEASUREMENT_ID") }}');
</script>
@endproduction