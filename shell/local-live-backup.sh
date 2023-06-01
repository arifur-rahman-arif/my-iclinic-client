#!/bin/bash

#Add the required tools to sync data with usb
#sudo apt-get install inotify-tools

# Load the environment variables from the .env file
source "../.env"

# Specify the files and folders to exclude
exclude_files=(
  ".next/" # Exclude the .next folder
  ".git/"        # Exclude the .git folder
  "build/"       # Exclude the build folder
  "node_modules/" # Exclude the node_modules folder
  "vendor/" # Exclude the Vendor folder
)

# Convert the array to a string of exclude patterns
exclude_patterns=$(printf -- '--exclude=%s ' "${exclude_files[@]}")

# Monitor the source folder for changes using inotifywait
while inotifywait -r -e modify,create,delete,move "$SOURCE_FOLDER"; do
    echo "Change detected. Starting backup..."

    # Sync the folders using rsync, excluding specified files and folders, and updating only changed files
    rsync -av --delete --checksum $exclude_patterns "$SOURCE_FOLDER/" "$USB_FOLDER/"

    echo "Backup completed."
done
