# Pandas ninja

Source code of pandas ninja https://pandas.ninja. 

Pandas ninja is teaching game made to become a master with the [pandas](https://pandas.pydata.org/) python libraires. There are challenges produced by the community and player must resolve it using one python expression. This application was possible thanks to the [pyodide.js](https://pyodide.org/en/stable/) library which makes possible to run python from client side. 

It is my first web application made with the following technology.  So feel free to fix my code and add contribution. 

- [svelte](https://svelte.dev/) 
- [vite](https://vitejs.dev/) 
- [tailwindcss](https://tailwindcss.com/)
- [daisyui](https://daisyui.com) 
- [pyodide](https://pyodide.org/en/stable/)


## Challenges contribution 

I invite you to create challenges and share them by making using pull request.   
A challenge is a json file with an input and an expected dataframe.     
All challenges are stored in the [public/challenges/](https://github.com/dridk/pandas-ninja/blob/main/public/challenges/) folder.

### Examples 

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


### challenge.py 

a python script [challenge.py](https://raw.githubusercontent.com/dridk/pandas-ninja/main/challenge.py) is available to create challenges. It depends only on `simplejson` and `pandas`.

#### Setup
```bash
pip install simplejson
wget https://raw.githubusercontent.com/dridk/pandas-ninja/main/challenge.py
```

Create a script file with the following code : 

```python
from challenge import Challenge
import pandas as pd
import numpy as np

file = "public/challenges/my_challenge.py"
c = Challenge()
c.name= "my challenge"
c.author  = "@github_account"
c.placeholder= " # A comment to put on source code editor " 

c.input_df = pd.DataFrame(...)
c.expected_df = pd.DataFrame(...)

c.show()
c.save(file)

```


## Launch the web app

```
git clone https://github.com/dridk/pandas-ninja
cd pandas-ninja
npm install 
npm run dev 

```


