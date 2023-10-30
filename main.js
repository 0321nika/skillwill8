//დავალება1
function expo(number, power, callback) {
    if (power === 0) {
        return 1;
    } else {
        return number * expo(number, power - 1, callback)
    }
}


const result = expo(3, 3, (result) => {
    console.log(result)
});

console.log(result)



//დავალება2


fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    const postsContainer = document.getElementById('posts-container')

    data.forEach(post => {
        const postElement = document.createElement('div')
        postElement.classList.add('element')
        postElement.innerHTML = 
        `
            <span>${post.id}</span>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement)
    });
})
.catch(error => console.error('Error fetching data:', error))


//დავალება3

function deepCopy(obj) {
    return new Promise((resolve, reject) => {
      if (typeof obj !== 'object') {
        reject(new Error('The argument is not an object.'));
      }
  
      try {
        const copiedObj = JSON.parse(JSON.stringify(obj));
        resolve(copiedObj);
      } catch (err) {
        reject(err);
      }
    });
  }
  

  const originalObj = {
    num1: 1,
    num2: {
      num3: 2,
      num4: [3, 4, 5]
    }
  };

  deepCopy(originalObj)
  .then((copiedObj) => {
    console.log('Deep copy successful:');
    console.log(copiedObj);
  })
  .catch((error) => {
    console.error('Error during deep copy:', error.message);
  });