# Setup

```
conda create -n <environment-name> --file conda.txt
pip install -r requirements.txt
```

# Export

```
conda list -e > conda.txt
pip freeze > requirements.txt
```