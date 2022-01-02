const url = 'https://jsonplaceholder.typicode.com/posts'
// const fetchPost = () => {
//     fetch(url, { method: 'GET' }).then((response) => {
//         console.log(response);
//         return response.json()
//     }).then((data) => {
//         console.log(data.reverse());
//         console.log();
//         let postsData = "<ol id='myOl' >"
//         data.map((post) => {
//             //template literals (ES6)
//             postsData += `<li><a herf='#'>${post.title}</a></li>`
//         })
//         postsData += '</ol>'
//         const divElement = document.getElementById('users')
//         divElement.innerHTML = postsData
//         console.log('postsData', postsData);
//     }).catch(err => {
//         console.log(err);
//         console.error(err.message);
//     })
// }

// fetchPost()

// function savePost() {
//     const post = {
//         userId: 1000,
//         title: 'javascript end game',
//         body: 'javaScript javaScript'
//     }

//     fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(post),
//         headers: {
//             'content-Type': 'application/json'
//         }
//     }).then((response) => {
//         console.log(response);
//         return response.json()
//     }).then(data => {
//         console.log('added post', data);
//     }).catch(err => {
//         console.log(err);
//         console.error(err.message)
//     })
// }

function myFunction() {
    let input = document.getElementById('myInput').value;
    let filter = input.toUpperCase();
    let ol = document.getElementById('myOl')
    let li = document.getElementsByTagName('li')

    for (let i = 0; i < li.length; i++) {

        let a = li[i].getElementsByTagName("a")[0];
        let textVal = a.textContent || a.innerText;

        if (textVal.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

function asscending() {
    fetch(url, { method: 'GET' }).then((response) => {
        console.log(response);
        return response.json()
    }).then((data) => {
        console.log(data);
        let postsData = "<ul>"
        data.map((post) => {
            //template literals (ES6)
            postsData += `<li><a herf='#'>${post.id}-${post.title}</a></li>`
        })
        postsData += '</ul>'
        const divElement = document.getElementById('id')
        divElement.innerHTML = postsData
        console.log('postsData', postsData);
    }).catch(err => {
        console.log(err);
        console.error(err.message);
    })

}

function descending(){

    fetch(url, { method: 'GET' }).then((response) => {
        console.log(response);
        return response.json()
    }).then((data) => {
        console.log(data);
        let revData=data.reverse()
        let postsData = "<ul>"
        revData.map((post) => {
            //template literals (ES6)
            postsData += `<li><a herf='#'>${post.id}-${post.title}</a></li>`
        })
        postsData += '</ul>'
        const divElement = document.getElementById('id')
        divElement.innerHTML = postsData
        console.log('postsData', postsData);
    }).catch(err => {
        console.log(err);
        console.error(err.message);
    })

}
