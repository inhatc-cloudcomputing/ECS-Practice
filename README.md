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

# Update installed packages and install Nginx
RUN apt update && \
    apt install -y nginx && \
    rm -rf /var/lib/apt/lists/*

# Write hello world message
RUN echo "<h1>Hello World! $(hostname -f)</h1>" | sudo tee /var/www/html/index.html

# Configure Nginx
RUN echo 'mkdir -p /var/run/nginx' >> /root/run_nginx.sh && \
    echo 'nginx -g "daemon off;"' >> /root/run_nginx.sh && \
    chmod 755 /root/run_nginx.sh

EXPOSE 80

CMD ["/root/run_nginx.sh"]
```
```bash
docker build -t hello-world .
docker images --filter reference=hello-world
docker run -t -i -p 80:80 hello-world
```

#### ECR
```bash
aws ecr get-login-password --region {리전} | docker login --username AWS --password-stdin {리포지토리 URI}
docker tag hello-world {리포지토리 URI}
docker push {리포지토리 URI}
```
