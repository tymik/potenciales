## Building backend

Building backend is pretty simple:

```
cd backend
docker build -t tymik/backend .
```

# Starting container

To start the container that you have built run:

```
docker run -d -p 8080:8080 --name backend tymik/backend
```