document.addEventListener('DOMContentLoaded', function() {
    const seoAuditForm = document.getElementById('seo-audit-tool');
    const auditResults = document.getElementById('audit-results');
    const resultsContent = document.getElementById('results-content');

    seoAuditForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const url = document.getElementById('website-url').value;
        const email = document.getElementById('email').value;
        
        // Simulate API call
        simulateAudit(url, email);
    });

    function simulateAudit(url, email) {
        // Show loading message
        resultsContent.innerHTML = '<p>Running SEO audit... Please wait.</p>';
        auditResults.style.display = 'block';

        // Simulate API call delay
        setTimeout(() => {
            const results = {
                score: 75,
                issues: [
                    "Missing meta description",
                    "Slow page load time",
                    "Not mobile-friendly",
                    "Duplicate content detected",
                    "Missing alt tags on images"
                ],
                recommendations: [
                    "Add a clear and concise meta description",
                    "Optimize images and minimize CSS/JS",
                    "Implement responsive design",
                    "Create unique content for each page",
                    "Add descriptive alt tags to all images"
                ]
            };
            displayResults(results);
        }, 3000);
    }

    function displayResults(results) {
        resultsContent.innerHTML = `
            <h4>Overall SEO Score: ${results.score}/100</h4>
            <h5>Issues Found:</h5>
            <ul>
                ${results.issues.map(issue => `<li>${issue}</li>`).join('')}
            </ul>
            <h5>Recommendations:</h5>
            <ul>
                ${results.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
        `;
    }
});

