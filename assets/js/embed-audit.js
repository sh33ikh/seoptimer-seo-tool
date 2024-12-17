(function() {
    // Create iframe element
    var iframe = document.createElement('iframe');
    iframe.src = 'https://sh33ikh.github.io/seoptimer-seo-tool/';
    iframe.style.width = '100%';
    iframe.style.height = '500px';
    iframe.style.border = 'none';

    // Find the container element
    var container = document.getElementById('seoptimer-embed');
    if (container) {
        container.appendChild(iframe);
    } else {
        console.error('SEOptimer: Container element not found');
    }
})();

