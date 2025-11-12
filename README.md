# ECS-Practice
AWS ECS. ECR Practice

## EC2

#### aws cli 설치
```bash
sudo snap install aws-cli --classic
aws configure set region {리전 ex. us-east-1}
aws sts get-caller-identity
```

#### Docker 설치
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io
sudo service docker status
sudo docker run hello-world
```

#### Docker 이미지 생성
```bash
vi Dockerfile
```
```dockerfile
FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y --no-install-recommends nginx && \
    rm -rf /var/lib/apt/lists/*

# Entry point script with shebang
RUN printf '#!/usr/bin/env bash\nset -e\nmkdir -p /var/www/html\necho "<h1>Hello World! $(hostname -f)</h1>" > /var/www/html/index.html\nexec nginx -g "daemon off;"\n' > /docker-entrypoint.sh \
    && chmod +x /docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]

```
```bash
sudo docker build -t hello-world .
sudo docker images --filter reference=hello-world
sudo docker run -t -i -p 80:80 hello-world
```

#### ECR
```bash
aws ecr get-login-password --region {리전} | sudo docker login --username AWS --password-stdin {리포지토리 URI}
sudo docker tag hello-world {리포지토리 URI}
sudo docker push {리포지토리 URI}
```
