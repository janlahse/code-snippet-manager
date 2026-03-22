export const snippets = [
  {
    title: 'HTML Boilerplate',
    tag: { name: 'HTML', color: 'blue' },
    isActive: false,
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Hello, world!</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="description" content="" />
  <link rel="icon" href="favicon.png">
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>`,
  },
  {
    title: 'CSS Reset',
    tag: { name: 'CSS', color: 'red' },
    isActive: false,
    content: `*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}`,
  },
  {
    title: 'Fetch API',
    tag: { name: 'JavaScript', color: 'green' },
    isActive: false,
    content: `async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`Response status: \${response.status}\`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}`,
  },
  {
    title: 'isAndroid',
    tag: { name: 'JavaScript', color: 'green' },
    isActive: false,
    content: `function isAndroid() {
    return navigator.userAgent.toLowerCase().indexOf('android') >= 0;
}`,
  },
  {
    title: 'Dropdown Menu',
    tag: { name: 'HTML', color: 'blue' },
    isActive: false,
    content: `<select name="myDropdown" id="dropdown">
  <option>1</option>
  <option selected>2</option>
  <option>3</option>
  <option>4</option>
</select>`,
  },
]

export const emptysnippet = {
  title: '',
  tag: { name: '', color: '' },
  isActive: false,
  content: '',
}
