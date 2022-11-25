# ==================================
#         Development config
# ==================================
start-build: 
	yarn install && sudo docker-compose -f docker-compose.yml up -d --build

# Start the server container
start: 
	sudo docker-compose -f docker-compose.yml up -d

# Stop the server container
stop: 
	sudo docker-compose down

remove-images: 
	sudo docker system prune -a --volumes
