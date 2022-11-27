#### GoVWA
GoVWA (Go Vulnerable Web Application) is a vulnerable web application designed for pentester or programmers to learn the web application vulnerability that often occur in web applications. The vulnerabilities in GoVWA are OWASP Top 10 category. 

#### WARNING!
---
GoVWA is a vulnerable web application, **Run it only on local environment**

#### Installation
---
#### Installing golang
Golang versiong : >= 1.11 
Installing guide : https://www.digitalocean.com/community/tutorials/how-to-install-go-1-6-on-ubuntu-16-04

#### Setup from docker
```
git clone https://github.com/yaaras/govwa.git

cd govwa

docker-compose up --build
```

#### GoVWA config
---
#### Modified the config.json file for database configuration

config.json file is located in config directory.

```
{
    "user": "root",
    "password": "root",
    "dbname": "govwa",
    "sqlhost": "localhost",
    "sqlport": "3306",
    "webserver": "http://localhost",
    "webport": "8888",

    "sessionkey:": "G0Vw444"
}
```

#### Setup
```
git clone https://github.com/yaaras/govwa.git

go mod download

go run app.go 

Open this URL http://localhost:8080/ on your browser to access GoVWA

```
Open the URL to access GoVWA and follow the setup instruction to create database and tables


GoVWA users:

| user | password   |
|------|------------|
| aqua | aqua       |

