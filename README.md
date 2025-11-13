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
sudo apt install -y docker-ce docker-ce-cli containerd.io
sudo service docker status
sudo docker run hello-world
```

#### 소스코드 다운로드 및 빌드
```bash
git clone https://github.com/inhatc-cloudcomputing/ECS-Practice.git
cd ECS-Practice/backend
sudo docker build -t ecs-backend:latest .
sudo docker run -d --name ecs-backend --network host ecs-backend
curl http://localhost:3001/hello

cd ../frontend
sudo docker build -t ecs-frontend:latest .
sudo docker run -d --name ecs-frontend --network host ecs-frontend
```

#### ECR
```bash
aws ecr get-login-password --region {리전} | sudo docker login --username AWS --password-stdin {리포지토리 URI}
sudo docker tag ecs-backend {백엔드 리포지토리 URI}
sudo docker push {백엔드 리포지토리 URI}
sudo docker tag ecs-frontend {프론트엔드 리포지토리 URI}
sudo docker push {프론트엔드 리포지토리 URI}
```
