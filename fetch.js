/**
 *  POST 示例
 */
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify({
		title: 'foo',
		body: 'bar',
		userId: 1
	}),
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})
	.then(response => response.json())
	.then(json => console.log(json))

/* will return
{
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1
}*/


/**
 *  GET 示例
 */

/*fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => response.json())
	.then(json => console.log(json))*/

/*
fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => response.json())
	.then(json => console.log(json))*/


/**
 *  PUT 示例
 */

/*fetch('https://jsonplaceholder.typicode.com/posts/1', {
	method: 'PUT',
	body: JSON.stringify({
		id: 1,
		title: 'foo',
		body: 'bar',
		userId: 1
	}),
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})
	.then(response => response.json())
	.then(json => console.log(json))*/

/* will return
{
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1
}
*/


/**
 *  PATCH 示例
 */

/*fetch('https://jsonplaceholder.typicode.com/posts/1', {
	method: 'PATCH',
	body: JSON.stringify({
		title: 'foo'
	}),
	headers: {
		"Content-type": "application/json; charset=UTF-8"
	}
})
	.then(response => response.json())
	.then(json => console.log(json))*/

/* will return
{
  id: 1,
  title: 'foo',
  body: 'quia et suscipit [...]',
  userId: 1
}
*/


/**
 * DELETE 示例
 */

/*fetch('https://jsonplaceholder.typicode.com/posts/1', {
	method: 'DELETE'
})
	.then(response => response.json())
	.then(json => console.log(json))*/
