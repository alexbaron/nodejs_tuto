#!/usr/bin/env bash
docker stop nodejs_nodejs_1
docker stop nodejs_nodejs_1
docker rm nodejs_nodejs_1
docker stop nodejs_mongo-express_1
docker stop nodejs_mongo-express_1
docker rm nodejs_mongo-express_1
docker stop nodejs_mongo_1
docker stop nodejs_mongo_1
docker rm nodejs_mongo_1
docker system prune --all -f
rm -rf ./db/*
