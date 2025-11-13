FROM node:20-alpine

WORKDIR /app

# 패키지 파일 복사
COPY package*.json ./

# 패키지 설치
RUN npm install --omit=dev

# 전체 소스 복사
COPY . .

ENV PORT=3001
EXPOSE 3001

CMD ["npm", "start"]

