Backbone Paginator
==================

Requirements : 

jQuery
Backbone

Usage:

In your DOM you need a paginator element ( with the class paginator )

```html
<div class="paginator">
    <div id="moveleft"></div>
    <div id="moveright"></div>
</div>
```

```javascript
// create a collection
var  myCollection = Backbone.Collection.extend();
...
// add a paginator to this collection
var paginator = PaginatorView.extend({ collection: myCollection });

```


In the server side:

You need to handle the parameter 'page_offset' ( that depends on your server side implementation )




