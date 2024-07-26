import { Link } from "react-router-dom";

function sendMessage(name, email, message) {
    const body = `Name: ${name}\nEmail: ${email}\n${message}`
    const url = `https://api.telegram.org/bot7097195113:AAGkCGHn8TtBmTlf8FkqFVuUqsAQ6vUEsC8/sendMessage`;
    const data = {
        chat_id: '130115955',
        text: body
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        }).then(responseData => {
            if (!responseData.ok) {
                console.error('Telegram API Error:', responseData.description);
            }
        })
        .catch(error => {
            console.error('Error sending message to Telegram:', error);
        });
}


function extractTagsAndSort(codes) {
    const allTags = []; // Stores all unique tags

    // Loop through each code object
    codes.forEach((code) => {
        // Extract tags and trim any extra spaces
        const codeTags = code.tags.map((tag) => tag.trim());

        // Add unique tags to the allTags array
        codeTags.forEach((tag) => {
            if (!allTags.includes(tag)) {
                allTags.push(tag);
            }
        });
    });

    // Sort tags by their frequency (count)
    allTags.sort((tag1, tag2) => {
        const count1 = codes.filter((code) => code.tags.includes(tag1)).length;
        const count2 = codes.filter((code) => code.tags.includes(tag2)).length;
        return count2 - count1; // Descending order (most frequent first)
    });

    return allTags;
}
function filterAndSortByTimeDesc(data) {
    return data.filter((code) => code.isShow == true).sort((a, b) => new Date(b.createTime) - new Date(a.createTime));
}
function parseTextWithMarkdown(text) {
    // Split the text into parts based on ***, **, *, and [text](link)
    const parts = text.split(/(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/);

    return parts.map((part, index) => {
        if (part.match(/\[[^\]]+\]\([^)]+\)/)) {
            // Handle [**word**](link) or similar cases
            const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
            const linkText = match[1];
            const url = match[2];
            if (url.startsWith('navigate')) {
                return (
                    <Link key={index} className="underline text-blue-600" to={url.replace('navigate', '')}>
                        {parseTextWithMarkdown(linkText)}
                    </Link>
                );
            } else {
                return (
                    <a key={index} href={url} className="underline text-blue-600" target="_blank" rel="noopener noreferrer">
                        {parseTextWithMarkdown(linkText)}
                    </a>
                );
            }
        } else if (part.match(/\*\*\*[^*]+\*\*\*/)) {
            // Handle ***word*** (italic and bold)
            const boldItalicText = part.slice(3, -3);
            return (
                <strong key={index} className='font-bold italic'>
                    {boldItalicText}
                </strong>
            );
        } else if (part.match(/\*\*[^*]+\*\*/)) {
            // Handle **word** (bold)
            const boldText = part.slice(2, -2);
            return (
                <strong key={index} className='font-bold'>
                    {boldText}
                </strong>
            );
        } else if (part.match(/\*[^*]+\*/)) {
            // Handle *word* (italic)
            const italicText = part.slice(1, -1);
            return (
                <em key={index} className='italic'>
                    {italicText}
                </em>
            );
        }
        return part;
    });
}
export { sendMessage, extractTagsAndSort, filterAndSortByTimeDesc, parseTextWithMarkdown };