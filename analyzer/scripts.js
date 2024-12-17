async function analyzeSEO() {
    const url = document.getElementById('url').value;
    if (!url) {
        alert('Please enter a valid URL');
        return;
    }

    // Clear previous results
    document.getElementById('missing-tags-list').innerHTML = '';
    document.getElementById('error-log-list').innerHTML = '';
    document.getElementById('suggestions-list').innerHTML = '';

    try {
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        const missingTags = [];
        const errors = [];
        const suggestions = [];

        // Check for missing meta tags
        const title = doc.querySelector('title');
        if (!title || title.textContent.trim() === '') {
            missingTags.push('<strong>Title Tag</strong> is missing or empty.');
        }

        const metaDescription = doc.querySelector('meta[name="description"]');
        if (!metaDescription || metaDescription.getAttribute('content').trim() === '') {
            missingTags.push('<strong>Meta Description</strong> is missing or empty.');
        }

        const metaKeywords = doc.querySelector('meta[name="keywords"]');
        if (!metaKeywords || metaKeywords.getAttribute('content').trim() === '') {
            missingTags.push('<strong>Meta Keywords</strong> is missing or empty.');
        }

        const ogImage = doc.querySelector('meta[property="og:image"]');
        if (!ogImage || ogImage.getAttribute('content').trim() === '') {
            missingTags.push('<strong>Open Graph Image</strong> is missing.');
        }

        // Check for image alt text
        const images = doc.querySelectorAll('img');
        images.forEach((img, index) => {
            if (!img.hasAttribute('alt') || img.getAttribute('alt').trim() === '') {
                errors.push(`Image ${index + 1} is missing alt text.`);
            }
        });

        // Suggestions
        if (missingTags.length > 0) {
            suggestions.push('Please add the missing SEO elements listed above.');
        }

        // Display results
        if (missingTags.length > 0) {
            missingTags.forEach(tag => {
                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item', 'list-group-item-warning');
                listItem.innerHTML = tag;
                document.getElementById('missing-tags-list').appendChild(listItem);
            });
        }

        if (errors.length > 0) {
            errors.forEach(error => {
                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item', 'list-group-item-danger');
                listItem.textContent = error;
                document.getElementById('error-log-list').appendChild(listItem);
            });
        }

        if (suggestions.length > 0) {
            suggestions.forEach(suggestion => {
                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item', 'list-group-item-info');
                listItem.textContent = suggestion;
                document.getElementById('suggestions-list').appendChild(listItem);
            });
        }
    } catch (error) {
        alert('Error analyzing the website. Please check the URL or try again later.');
    }
}
