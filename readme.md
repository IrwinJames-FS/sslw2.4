# NodeJS API

## Setup
### To run application
```
npm i 
npm start
```

### To test application
```
npm test
```
---
## Model
This api returns the api provided by [hipolabs](http://universities.hipolabs.com)

### University
```ts
type University = {
	'state-province': string | null,
	'web_pages': string | string[],
	'name': string,
	'domains': string | string[],
	'alpha_two_code': string,
	'country': string
}
```
## Routes

| Route | Docs |
| ----- | ---- |
| / | [Status](#status) |
| /uni | [Fetch All](#fetch-all) |
| /uni/page | [Pagination](#pagination) |
| /uni/name | [Name Filter](#name-filter) |
| /uni/country | [Country Filter](#country-filter) |
| /uni/countryname | [Country & Name Filter](#country--name-filter) |

### Status
This endpoint responds with Service is up if the server is currently running. 

**Route**: \<hostname\>

**Returns**:
```ts
string
```

### Fetch All
Fetch all universities with no queries
**Route**: \<hostname\>/uni
**Returns**: 
```ts
Array<University>
```


### Pagination
Fetch all universities and expose limit and offset operators. limit and offset are both optional values. 

**Route**: \<hostname\>/uni/page/:limit?/:offset?
**Returns**:
```ts
Array<University>
```

#### Name Filter
Fetch all universities that name contains the provided name

**Route**:\<hostname\>/uni/name/:name/:limit?/:offset?
**Returns**:
```ts
Array<University>
```

#### Country Filter
Fetch all universities that exist in the provided country. The provided text must match the spelling however is not case sensitive. 

**Route**:\<hostname\>/uni/country/:country/:limit?/:offset?
**Returns**:
```ts
Array<University>
```

#### Country & Name Filter
Fetch all universities within a country that satisfies the name search as well

**Route**:\<hostname\>/uni/countryname/:country/:name/:limit?/:offset?
**Returns**:
```ts
Array<University>
```





