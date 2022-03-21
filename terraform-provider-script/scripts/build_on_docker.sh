#!/bin/bash
set -e

DOCKER_IMAGE_NAME="terraform-for-script-build"
DOCKER_CONTAINER_NAME="terraform-for-script-build-container"

if [[ $(docker ps -a | grep $DOCKER_CONTAINER_NAME) != "" ]]; then
  docker rm -f $DOCKER_CONTAINER_NAME 2>/dev/null
fi

docker build -f scripts/Dockerfile.build -t $DOCKER_IMAGE_NAME .

docker run --name $DOCKER_CONTAINER_NAME \
       -e TF_LOG \
       -e TESTARGS \
       $DOCKER_IMAGE_NAME make "$@"
if [[ "$@" == *"build"* ]]; then
  docker cp $DOCKER_CONTAINER_NAME:/go/src/github.com/jacobwgillespie/terraform-provider-script/bin ./
fi
docker rm -f $DOCKER_CONTAINER_NAME 2>/dev/null
