const categiriesList = document.querySelector('#categories');

const categoryItems = categiriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => { 
  const categoryName = item.querySelector('h2').textContent;

  const elementsCount = item.querySelectorAll('ul li').lenght;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
