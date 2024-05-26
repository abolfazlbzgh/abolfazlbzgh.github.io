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
function sortByTimeDesc(data) {
    return data.sort((a, b) => new Date(b.createTime) - new Date(a.createTime));
}
export { sendMessage, extractTagsAndSort, sortByTimeDesc };