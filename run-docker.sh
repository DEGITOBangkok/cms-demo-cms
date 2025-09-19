#!/bin/bash

# Stop and remove existing container
docker rm -f degito-cms 2>/dev/null

# Start new container
docker run -d -p 1337:1337 --name degito-cms --env-file .env degito-cms:latest

# Wait for container to start
sleep 10

# Copy current database
docker cp .tmp/data.db degito-cms:/opt/app/.tmp/data.db

# Fix permissions
docker exec degito-cms chown node:node /opt/app/.tmp/data.db
docker exec degito-cms chmod 664 /opt/app/.tmp/data.db

# Restart container to load the database
docker restart degito-cms

echo "Container started with current database!"
echo "Access your CMS at: http://localhost:1337/admin"
