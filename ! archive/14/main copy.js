// Create
// Read
// Update
// Delete

// ! CRUD

// ! Delete => DELETE

// async function deleteData(url) {
//   const response = await fetch(url, {
//     method: 'DELETE',
//   })

//   if (!response.ok) {
//     throw new Error(`Could not fetch ${url}, status: ${response.status}`)
//   }

//   return response.ok
// }

// deleteData('https://jsonplaceholder.typicode.com/posts/1')
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// ! Update => PATCH
// async function patchData(url, data) {
//   const response = await fetch(url, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })

//   if (!response.ok) {
//     throw new Error(`Could not fetch ${url}, status: ${response.status}`)
//   }

//   return response.json()
// }

// patchData('https://jsonplaceholder.typicode.com/posts/1', {
//   title: 'foo',
//   body: 'bar',
//   descritiption: 'var',
// })
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// ! Update => PUT
// async function putData(url, data) {
//   const response = await fetch(url, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })

//   if (!response.ok) {
//     throw new Error(`Could not fetch ${url}, status: ${response.status}`)
//   }

//   return response.json()
// }

// putData('https://jsonplaceholder.typicode.com/posts/1', {
//   title: 'foo',
//   descritiption: 'bar',
// })
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// ! Create => POST
// async function postData(url, data) {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })

//   if (!response.ok) {
//     throw new Error(`Could not fetch ${url}, status: ${response.status}`)
//   }

//   return response.json()
// }

// postData('https://jsonplaceholder.typicode.com/posts', {
//   title: 'foo',
//   descritiption: 'bar',
// })
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// ! Read => GET
// async function getData(url) {
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })

//   if (!response.ok) {
//     throw new Error(`Could not fetch ${url}, status: ${response.status}`)
//   }

//   return response.json()
// }

// getData('https://jsonplaceholder.typicode.com/posts')
//   .then(data => console.log(data))
//   .catch(error => console.log(error))
