Course notes from Docker Container Course from Udemy.

# Docker Introduction

- Docker is an open source containerization technology created in 2013 that can be compared to a VM

- Provides a **portable runtime environment**, which handles missing dependencies, etc.

- Eradicates the need for a VM

- DevOps concerns: Logging, Remote access, Monitoring, Network configuration for containers, provisioning containers

  

- **Install docker** on Linux using `yum install docker`

- Start docker daemon from the cmd line as a system: `service docker start`

The Docker Ecosystem consists of three components:

1. **Docker Client**: user interface for interact with Docker by issuing commands (CLI, or remote). This talks to the Docker Daemon in the Docker Host.
2. **Docker Host**: the heart of Docker - host OS, Daemon and containers that are running. Docker Daemon creates and manages images, containers, network, volumes, etc.
3. **Docker Registry**: contains the public images that can be loaded

A **docker image** is a file that represents the build component of Docker. An image defines the OS, packages, etc. that are needed to build a container. This s the *build component* of Docker.

A **docker container** is a set of files, and each container can be thought of as a separate process. A container is started by executing the image. This is the *run component* of Docker.

# Docker Containers

Docker has two distinct set of commands - those that start with `docker container ...` and those that start with `docker ...`



`docker run -it <name> <command>` - to run a container in interactive mode. For example, can run Ubuntu using `docker run -it ubuntu bash`

`docker start <id or name>` - to restart a container

`Ctrl+Z` or `docker stop <id or name>` - to stop a running container 

`docker container ls` - show loaded containers

`docker pull hello-world` - pull an image from DockerHub

`docker ps -a` - list all processes (currently running)

`docker image ls` - show pulled images

`docker attach <container id or name>` - if you don't start in interactive mode, you can inspect the container

`Ctrl+P . Ctrl+Q` - If you want to exit the container without killing 

`docker rm <id or name>` - to remove the container from the list

Docker images can be saved as tar archives and loaded later.

# Creating Docker Images

A Dockerfile helps in creating custom images. Images (not containers) are read only, so to persist changes to distribute to others, we create a new image, based off an existing image.

`docker commit <id or name>` - creates a new image based off the current state of an existing container

**Dockerfiles**

A docker file lists a bunch of commands. e.g.:

- `FROM` - which image to use
- `COPY` - copy files from client to container
- `CMD` - run a command in the container
- `EXPOSE` - to expose a port

To containerize something, create a Dockerfile supplying an image (`FROM`), create a `WORKDIR` , copy files into that directory (using `COPY`), expose port (using `EXPOSE`), define env variables (using `ENV`), and finally define a `CMD` to run

To create an image from a Dockerfile, use `docker build .`. This will create a Docker image that shows up in `docker image ls`.



