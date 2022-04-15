BEGIN;

DROP TABLE IF EXISTS customers,
packages,
stores CASCADE;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    mobile INT NOT NULL
);

CREATE TABLE stores (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    mobile INT NOT NULL,
    account_link VARCHAR(255) NOT NULL
);

CREATE TABLE packages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    customer_id INT REFERENCES customers(id) ON UPDATE CASCADE,
    store_id INT REFERENCES stores(id) ON UPDATE CASCADE,
    image VARCHAR(255) NOT NULL,
    Package_date date NOT NULL,
    price INT NOT NULL
);

INSERT INTO
    customers (name, address, mobile)
VALUES
    ('Nada', 'Ramallah', '0597897546'),
    ('Manar', 'Gaza', '0598752352'),
    ('Noor', 'Nablus', '0587965423'),
    ('Nadin', 'Hebron', '0523698547');

INSERT INTO
    stores (name, mobile, account_link)
VALUES
    (
        'Moda_Turkey',
        '0597897546',
        'https://www.modturky.com/'
    ),
    (
        'Crystal market',
        '0597092748',
        'https://www.market.com/'
    ),
    (
        'Newlook',
        '0597022748',
        'https://www.newlook.com/'
    );

INSERT INTO
    packages (
        name,
        customer_id,
        store_id,
        image,
        Package_date,
        price
    )
VALUES
    (
        'Shoes',
        '1',
        '1',
        'https://cutt.ly/hAImNqW',
        '2022-04-20',
        500
    );

INSERT INTO
    packages (
        name,
        customer_id,
        store_id,
        image,
        Package_date,
        price
    )
VALUES
    (
        'Dress',
        '2',
        '1',
        'https://cutt.ly/PAIW6tZ',
        '2022-04-2',
        200
    );

INSERT INTO
    packages (
        name,
        customer_id,
        store_id,
        image,
        Package_date,
        price
    )
VALUES
    (
        'T-shirt',
        '3',
        '3',
        'https://cutt.ly/XAIWAwE',
        '2022-03-20',
        300
    );

INSERT INTO
    packages (
        name,
        customer_id,
        store_id,
        image,
        Package_date,
        price
    )
VALUES
    (
        'Bag',
        '4',
        '3',
        'https://cutt.ly/5AIEiuu',
        '2022-04-24',
        100
    );

COMMIT;
