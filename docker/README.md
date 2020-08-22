## Things that were extremely helpful

* https://stackoverflow.com/a/49654944/1520842

# How to build or rebuild

This can be useful if you do changes to your code after you already ran this.

```
docker-compose build
```

# How to run this

```
docker-compose up -d
```

## Additional information

There are env vars `BACKEND_ADDRESS` at the frontend container and `ALLOW_ORIGIN` at backend container that I think I will use in future, if I get some time to implement them.
For now I need to focus on other things, so I will just skip it and hopefully come back to it later.