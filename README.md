
# Product Management System

This system includes all the information about companies and their products.

## Indices

* [Companies](#companies)

  * [Creates a new company](#1-creates-a-new-company)
  * [Deletes a specific company](#2-deletes-a-specific-company)
  * [Retrieves a list of companies](#3-retrieves-a-list-of-companies)
  * [Retrieves a specific company](#4-retrieves-a-specific-company)
  * [Updates a specific company](#5-updates-a-specific-company)

* [Products](#products)

  * [Creates a new product](#1-creates-a-new-product)
  * [Deletes a specific product](#2-deletes-a-specific-product)
  * [Retrieves a list of products](#3-retrieves-a-list-of-products)
  * [Retrieves a specific product](#4-retrieves-a-specific-product)
  * [Updates a specific product](#5-updates-a-specific-product)


--------


## Companies
All the APIs for companies



### 1. Creates a new company


Creates a new company in database and adds the info about the company


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/companies/
```



***Body:***

```js        
{
    "name": "company-name",
    "tel": "021525632"
}
```



### 2. Deletes a specific company


Deletes a single company with that ID


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/companies/5ef11d35291d23051477f79c
```



### 3. Retrieves a list of companies


Retrieves all the companies with their products


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/companies/
```



### 4. Retrieves a specific company


Retrieves a single company with that ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/companies/5ef11ca0d8e55e3cb81c0c0a
```



### 5. Updates a specific company


Updates a single company with that ID


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/companies/5ef11ca0d8e55e3cb81c0c0a
```



***Body:***

```js        
{
    "tel": "0100011"
}
```



## Products
All the APIs for products



### 1. Creates a new product


Creates a new product in database and adds the info about the product


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL2}}/products/
```



***Body:***

```js        
{
    "title": "product-title",
    "productType": "type 2",
    "productionDate": "2/3/2018",
    "company": "5ef121074aba222f4ceddfd9"
}
```



### 2. Deletes a specific product


Deletes a single product with that ID


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL2}}/products/5ef12607ed6eef3700a632de
```



### 3. Retrieves a list of products


Retrieves all the products information


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL2}}/products
```



### 4. Retrieves a specific product


Retrieves a single product with that ID


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL2}}/products/5ef12607ed6eef3700a632de
```



### 5. Updates a specific product


Updates a single product with that ID


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL2}}/products/5ef12607ed6eef3700a632de
```



***Body:***

```js        
{
    "title": "Product new title",
    "productionDate": "2/5/2019",
    "company": "5ef12153676582353c8c2212"
}
```



---
[Back to top](#product-management-system)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-06-25 23:16:44 by [docgen](https://github.com/thedevsaddam/docgen)
