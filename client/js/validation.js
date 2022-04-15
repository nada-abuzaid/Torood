// Validation Variables

// Store Section
const addStoreBtn = document.getElementById('addStore');

const storeNameInput = document.getElementById('storeName');
const storePhoneInput = document.getElementById('storePhone');
const storeLinkInput = document.getElementById('storeLink');

const nameErr = document.getElementById('nameErr');
const phoneErr = document.getElementById('phoneError');
const linkErr = document.getElementById('linkkErr');

// Customer Section
const addCustomerBtn = document.getElementById('addCustomer');

const customerNameInput = document.getElementById('customerName');
const customerPhoneInput = document.getElementById('customerPhone');
const customerAddressInput = document.getElementById('customerAddress');

const customerNameErr = document.getElementById('customerNameError');
const customerPhoneErr = document.getElementById('customerPhoneError');
const customerAddressErr = document.getElementById('customerAddressErr');

// Package Section
const addPackageBtn = document.getElementById('addPackage');

const packageNameInput = document.getElementById('packageName');
const packageDateInput = document.getElementById('packageDate');
const packageImageInput = document.getElementById('packageImage');
const customerSelectInput = document.getElementById('customerSelectSection');
const storeSelectInput = document.getElementById('storeSelectSection');
const packagePriceInput = document.getElementById('packagePrice');

const packageNameErr = document.getElementById('packageNameErr');
const packageDateErr = document.getElementById('packageDateErr');
const packageImageErr = document.getElementById('packageImageErr');
const customerSelectErr = document.getElementById('customerSelectErr');
const storeSelectErr = document.getElementById('storeSelectErr');
const packagePriceErr = document.getElementById('packagePriceErr');

const empty = () => {
  nameErr.textContent = '';
  phoneErr.textContent = '';
  linkErr.textContent = '';
};

const emptyCustomer = () => {
  customerNameErr.textContent = '';
  customerPhoneErr.textContent = '';
  customerAddressErr.textContent = '';
};

const emptyPackage = () => {
  packageNameErr.textContent = '';
  packageDateErr.textContent = '';
  packageImageErr.textContent = '';
  customerSelectErr.textContent = '';
  storeSelectErr.textContent = '';
  packagePriceErr.textContent = '';
};

const errorHandle = (errorText, inputBox, errorLabel, e) => {
  const err = document.createTextNode(errorText);
  errorLabel.appendChild(err);
  e.preventDefault();
};

const submitStoreHandler = (event) => {
  if (storeNameInput.validity.valueMissing) {
    empty();
    errorHandle('Please Enter Strore Name!', storeNameInput, nameErr, event);
  } else if (storePhoneInput.validity.valueMissing) {
    empty();
    errorHandle(
      'Please Enter Strore Phone Number!',
      storePhoneInput,
      phoneErr,
      event
    );
  } else if (storePhoneInput.value.length != 10) {
    empty();
    errorHandle(
      'Please Enter Correct Phone Number!',
      storePhoneInput,
      phoneErr,
      event
    );
  } else if (storeLinkInput.validity.valueMissing) {
    empty();
    errorHandle(
      'Please Enter Strore Website Link!',
      storeLinkInput,
      linkErr,
      event
    );
  } else {
    customerBtn.className = 'btn';
    storeBtn.className = 'btn';
    packageBtn.className = 'btn';
  }
};

const submitCustomerHandler = (event) => {
  if (customerNameInput.validity.valueMissing) {
    empty();
    errorHandle(
      'Please Enter Customer Name!',
      customerNameInput,
      customerNameErr,
      event
    );
  } else if (customerPhoneInput.validity.valueMissing) {
    empty();
    errorHandle(
      'Please Enter Customer Phone Number!',
      customerPhoneInput,
      customerPhoneErr,
      event
    );
  } else if (customerPhoneInput.value.length != 10) {
    empty();
    errorHandle(
      'Please Enter Correct Phone Number!',
      customerPhoneInput,
      customerPhoneErr,
      event
    );
  } else if (customerAddressInput.validity.valueMissing) {
    empty();
    errorHandle(
      'Please Enter Customer Address!',
      customerAddressInput,
      customerAddressErr,
      event
    );
  } else {
    openTab('package');
    customerBtn.className = 'btn';
    storeBtn.className = 'btn';
    packageBtn.className = 'btn active';
  }
};

const submitPackageHandler = (event) => {
  if (packageNameInput.validity.valueMissing) {
    console.log(customerSelectInput.value);

    emptyPackage();
    errorHandle(
      'Please Enter package Name!',
      packageNameInput,
      packageNameErr,
      event
    );
  } else if (packageDateInput.validity.valueMissing) {
    emptyPackage();
    errorHandle(
      'Please Enter Sending Date!',
      packageDateInput,
      packageDateErr,
      event
    );
  } else if (customerSelectInput.value === 'Customer Name') {
    emptyPackage();
    errorHandle(
      'Please Select Customer!',
      customerSelectInput,
      customerSelectErr,
      event
    );
  } else if (storeSelectInput.value === 'Store Name') {
    emptyPackage();
    errorHandle(
      'Please Select Your Store!',
      storeSelectInput,
      storeSelectErr,
      event
    );
  } else if (packageImageInput.validity.valueMissing) {
    emptyPackage();
    errorHandle(
      'Please Enter Image URL!',
      packageImageInput,
      packageImageErr,
      event
    );
  } else if (packagePriceInput.validity.valueMissing) {
    emptyPackage();
    errorHandle(
      'Please Enter package Price!',
      packagePriceInput,
      packagePriceErr,
      event
    );
  }
};

addStoreBtn.addEventListener('click', (e) => {
  submitStoreHandler(e);
});

addCustomerBtn.addEventListener('click', (e) => {
  submitCustomerHandler(e);
});

addPackage.addEventListener('click', (e) => {
  submitPackageHandler(e);
});
