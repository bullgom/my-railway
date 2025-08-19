# Run

Build the image: 
```cmd
docker build -t my-vite-app .
```

Run the container: 
```cmd
docker run -d -p 8080:80 my-vite-app
```