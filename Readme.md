# 🎵 Fihirana  API

This repository contains the base code for the fihirana ffpm API. the goal is to help all developers who wish to use to recover all the songs used in the FJKM church. Solii Deo Gloria

## 📌Features

 - Get the entire lyrics or just a few verses.
 - Support many types of songs: `FFPM`, `FF`, `ANTEMA`.
 - Management of errors related to missing parameters or invalids.
 
## 📥 Installation
```bash
git clone https://github.com/Rohan29-AN/ffpm_api.git
```

```bash
cd ffpm_api
```

```bash
npm install
```

```bash
npm start
```

The server is set up to run on https://localhost:3000 by default.


## 🔀Endpoints

`POST /lyrics/:songId`

The query's parameters are as follows:
| Parameters | Type | Required | Description |
|--|--|--|--|
| songType | string | ✅|  Type of the song ( `ffpm` , `ff` , `antema`)|
| verses | string | ❌|  A list of verses that need to be retrieved.(e.g. `1,3`)|

Example of query:

```bash
curl -X POST "http://localhost:3000/lyrics/823?songType=ffpm&verses=1,3"
```
Example of response:
```json
{
  "songId": "1",
  "songType": "ffpm",
  "requestedVerses": [
    1,
    3
  ],
  "verses": [
    {
      "andininy": 1,
      "tononkira": "Andriananahary masina indrindra!\nNy anjelinao izay mitoetra Aminao\nMifamaly hoe : Masina indrindra\nAndriananahary, Telo Izay Iray.",
      "fiverenany": false
    },
    {
      "andininy": 3,
      "tononkira": "Zava-manana aina samy mankalaza\nSady manambara Anao Izay Tompony izao;\nHianao irery no mitahy azy,\nAndriananahary, Telo Izay Iray.",
      "fiverenany": false
    }
  ]
}
```

## 💡Tips for Front-End
To ensure correct lyrics display in the browser (with line breaks), use:
```javascript
var.replace(/\n/g, "<br>");
```
## ✅TODO

 - Create an API with GraphQL
 - Create a search system that is based on lyrics
 - API Documentation
 - Write unit tests
 - Resolve the issue with the response format


## 📝LICENSE

This Fihirana API project is open source and licensed under the [MIT License](./LICENSE). 
