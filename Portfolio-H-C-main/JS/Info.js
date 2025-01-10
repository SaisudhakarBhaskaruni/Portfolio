// Info.js file....
// skills.js file....
// projects.js file....

async function fetchLeetCodeStats() {

    try {
        // https://leetcode-api-faisalshohag.vercel.app/Saiki1212   .
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/leelasai22');
        if (!response.ok) {
            throw new Error('Failed to fetch LeetCode statistics');
        }
        const data = await response.json();

        const leetCodeData = {
            easySolved: data.easySolved,
            mediumSolved: data.mediumSolved,
            hardSolved: data.hardSolved,
            totalSolved: data.totalSolved
        };

        const statsEvent = new CustomEvent('leetCodeStats', { detail: leetCodeData });
        document.dispatchEvent(statsEvent);

    } catch (error) {
        console.error('Error fetching LeetCode statistics:', error);
    }
}
fetchLeetCodeStats();

// Links of the External websites............

function redirectToLeetCode() {
    window.open('https://leetcode.com/u/leelasai22/', '_blank');
}
function redirectToGithub() {
    window.open('https://github.com/leelasai22', '_blank');
}
function redirectToLinkedIn() {
    window.open('https://www.linkedin.com/in/sai-sudhakar/', '_blank');
}
function redirectToInstagram() {
    window.open('https://www.instagram.com/saisudhakarbhaskaruni/', '_blank');
}

// skills.js.....

function redirectToJava() {
    window.open('https://www.java.com/en/', '_blank');
}

function redirectToKotlin() {
    window.open('https://kotlinlang.org/', '_blank');
} 

function redirectToJavaScript() {
    window.open('https://www.javascript.com/', '_blank');
}

function redirectToHtml() {
    window.open('https://html.spec.whatwg.org/', '_blank');
}
function redirectToCss() {
    window.open('https://www.w3.org/TR/CSS/#css', '_blank');
} 
function redirectToMongoDB() {
    window.open('https://www.mongodb.com/docs/', '_blank');
}
function redirectToMysql() {
    window.open('https://www.mysql.com/', '_blank');
}
function redirectToReact() {
    window.open('https://react.dev/', '_blank');
}
function redirectToNodeJS() {
    window.open('https://nodejs.org/en', '_blank');
}
function redirectToAndroid() {
    window.open('https://developer.android.com/reference/org/w3c/dom/Document', '_blank');
}

// project.js......

function openMyProject(url) {
    window.open(url, '_blank');
}

// To Open my resume.....

function openResume() {
    const resumeUrl = './images/placementcv.pdf';
    window.open(resumeUrl, '_blank');
}
