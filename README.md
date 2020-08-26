# JAPI
A mini Joomla API wrapper.


## Usage

### Including it in your page:
```javascript
<script src="japi.js" type="module"></script>
```

### Importing it in your Javascript file:
```javascript
import JAPI from './japi.js'
```

### Instantiate the class:
```javascript
const japi = new JAPI(
  'https://yoursite.com',
  'YOUR_JOOMLA_TOKEN'
)
```

## Examples

### GET (list)
```javascript
japi.get('content/article')
  .then(response => console.log(response))
```

### GET (single)
```javascript
japi.get('content/article/1')
  .then(response => console.log(response))
```

### CREATE
```javascript
japi.post('content/article', {
  alias: 'my-article',
  articletext: 'My text',
  catid: 2,
  language: '*',
  metadesc: '',
  metakey: '',
  title: 'My New Article'
}).then(response => console.log(response))
```

### DELETE
```javascript
japi.delete('content/article/1')
  .then(response => console.log(response))
```
### UPDATE</h3>
```javascript
japi.update('content/article/1', {
  catid: 2,
  title: 'My Updated Article',
}).then(response => console.log(response))
```

## More info
Check out more [infomation on Joomla's core APIs](https://docs.joomla.org/J4.x:Joomla_Core_APIs).
