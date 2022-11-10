# Source code of pandas ninja 
https://dridk.github.io/pandas-ninja/

This application has been made with the following technology. It is my first web application, so feel free to tell me if my code is wrong. 

- [svelte](https://svelte.dev/) 
- [vite](https://vitejs.dev/) 
- [tailwindcss](https://tailwindcss.com/)
- [daisyui](https://daisyui.com) 
- [pyodide](https://pyodide.org/en/stable/)


## Installation for developers 

```
git clone https://github.com/dridk/pandas-ninja
cd pandas-ninja
npm install 
npm run dev 

```


## Challenges contribution 

I invite you to create challenges and share them by making a pull request.    
A challenge is defined as a json file with an input and an expected table. 
All challenges are stored in [ublic/challenges/](https://github.com/dridk/pandas-ninja/blob/main/public/challenges/). 

## Examples 

```json
{
  "title": "example",
  "author": "@author_name",
  "placeholder": "#This text will be place into the code editor \nprint(df)",
  "input": [
    {
      "count": 2,
      "fruits": "apple"
    },
    {
      "count": 4,
      "fruits": "banana"
    }
    ], 
     "expected": [
    {
      "count": 4,
      "fruits": "apple"
    },
    {
      "count": 2,
      "fruits": "banana"
    }
    ]
    

```

