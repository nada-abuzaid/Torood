
const selectSection = document.getElementById('customerSelectSection');
const allScreen = document.getElementById('all-screen');


fetch('/get-customers')
  .then((res) => res.json())
  .then((data) => getCustomers(data));

const getCustomers = (customers) => {
  customers.forEach((customer) => {
    const option = document.createElement('option');
    option.textContent = customer.name;
    option.value = customer.id;
    option.name = 'customerId';
    selectSection.appendChild(option);
  });
};

const storeSection = document.getElementById('storeSelectSection');
fetch('/get-stores')
  .then((res) => res.json())
  .then((data) => getStores(data));

const getStores = (stores) => {
  stores.forEach((store) => {
    const option = document.createElement('option');
    option.textContent = store.name;
    option.value = store.id;
    option.name = 'storeId';
    storeSection.appendChild(option);
  });
};

fetch('/get-packages')
  .then((res) => res.json())
  .then((data) => getPackages(data));

const getPackages = (packages) => {
  packages.forEach((package) => {
    const packageDiv = document.createElement('div');
    packageDiv.className = 'tile';

 
    
    const packageImg = document.createElement('img');
    packageImg.src = package.image;
    packageImg.className = 'pa_img';


    const packageName = document.createElement('p');
    packageName.className = 'package_name';
    packageName.textContent = package.name;

    const packagePrice = document.createElement('p');
    packagePrice.className = 'package_price';
    packagePrice.textContent = package.price;

    const packagdate = document.createElement('p');
    packagdate.className = 'package_date';
    const date = new Date(package.package_date);
    const formatDate =
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      (date.getDate() - 1);
    packagdate.textContent = formatDate;

    const deleteicon = document.createElement('i');
    deleteicon.className = 'bx bx-x';
    deleteicon.id = 'delete-icon';

    packageDiv.appendChild(packageImg);
    packageDiv.appendChild(packageName);
    packageDiv.appendChild(packagePrice);
    packageDiv.appendChild(packagdate);
    packageDiv.appendChild(deleteicon);
    allScreen.prepend(packageDiv);

    deleteicon.addEventListener('click' , ()=>{
      deleteData(package.id);
      packageDiv.remove();
    })

  });
};

const deleteData = (id) => {
  const request = {
    method: 'DELETE',
  };
  return fetch(`/delete/${id}`, request);
};
