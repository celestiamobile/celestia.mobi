function fetchCategoriesWithCallback(success, failure) {
  let url = window.location.origin + '/api/resource/categories'
  $.getJSON(url, {'lang' : 'en'}, function(response) {
    if (response.status != 0) {
      failure()
      return
    }
    let categories = JSON.parse(response.info.detail)
    success(categories)
  })
}

function fetchCategoryInfoWithCallback(category, success, failure) {
  let url = window.location.origin + '/api/resource/category'
  $.getJSON(url, {'lang' : 'en', 'category' : category}, function(response) {
    if (response.status != 0) {
      failure()
      return
    }
    let cat = JSON.parse(response.info.detail)
    success(cat)
  })
}

function fetchItemsWithCallback(category, success, failure) {
  let url = window.location.origin + '/api/resource/items'
  $.getJSON(url, {'lang' : 'en', 'category' : category}, function(response) {
    if (response.status != 0) {
      failure()
      return
    }
    let items = JSON.parse(response.info.detail)
    success(items)
  })
}

function fetchItemWithCallback(id, success, failure) {
  let url = window.location.origin + '/api/resource/item'
  $.getJSON(url, {'lang' : 'en', 'item' : id}, function(response) {
    if (response.status != 0) {
      failure()
      return
    }
    let item = JSON.parse(response.info.detail)
    success(item)
  })
}