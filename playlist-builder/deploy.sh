#!/bin/bash

VERSION=$1

# Deploy image to Docker Hub
docker push playlist/playlist-builder:$VERSION
docker push playlist/playlist-builder:latest

# Deploy to Cloud 66
curl -X POST -d '' https://app.cloud66.com/api/3/stacks/$CLOUD66_STACK_ID/deployments -H "Authorization: Bearer $CLOUD66_TOKEN"
