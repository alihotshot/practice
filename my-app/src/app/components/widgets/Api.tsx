import { log } from "console"

async function Api() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            Authorization: `Bearer 511f633bf09d9b215b26c1b6d5dcbb38169041b84fa458ae24f6ead71e07676b`
        },
        body: JSON.stringify({
            "bookId": 3,
            "customerName": "Ali Haider"
        })
    })

    const data = response.json()

    return (
        <div>
            {data.i}
        </div>
    )
}

export default Api
