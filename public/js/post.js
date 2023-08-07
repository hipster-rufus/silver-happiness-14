const commentFormHandler = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#comment-text').value.trim();
    const postId = document.querySelector('#postId').value;

    if (text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
            alert('Comment successfully posted!');
        } else {
            alert('Failed to send comment');
        }
    }
}

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentFormHandler);
  